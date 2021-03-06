//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import * as firebase from "firebase";
import { reAuthenticate } from "../../utils/Api";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// create a component
const ChangePassword = ({ isVisibleModal, toastRef }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const [hideNewPasswordRepeat, setHideNewPasswordRepeat] = useState(true);

  const updatePassword = () => {
    setError({});
    if (!password || !newPassword || !newPasswordRepeat) {
      let objError = {};
      !password && (objError.password = "No puede estar vacio");
      !newPassword && (objError.newPassword = "No puede estar vacio");
      !newPasswordRepeat &&
        (objError.newPasswordRepeat = "No puede estar vacio");
      setError(objError);
    } else {
      if (newPassword !== newPasswordRepeat) {
        setError({
          newPassword: "Las nuevas contraseñas tienen que ser iguales",
          newPasswordRepeat: "Las nuevas contraseñas tienen que ser iguales",
        });
      } else {
        setIsLoading(true);
        reAuthenticate(password)
          .then(() => {
            firebase 
              .auth()
              .currentUser.updatePassword(newPassword)
              .then(() => {
                setIsLoading(false);
                toastRef.current.show('Contraseña actualiza correctamente');
                setIsVisibleModal(false)
                firebase.auth().signOut();
                })
              .catch(() => {
                setError({
                  general: 'No se pudo actualizar la contraseña'
                })
               setIsLoading(false);
               setIsVisibleModal(false);
              });
          })
          .catch(() => {
            setError({
              password: "La contraseña no es correcta",
            });
            setIsLoading(false);
          });
      }
    }
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="Contraseña actual"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={hidePassword}
        rightIcon={
          <MaterialCommunityIcons
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            color="#c2c2c2"
            size={25}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
        onChange={(e) => setPassword(e.nativeEvent.text)}
        errorMessage={error.password}
      />
      <Input
        placeholder="Nueva contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={hideNewPassword}
        rightIcon={
          <MaterialCommunityIcons
            name={hideNewPassword ? "eye-outline" : "eye-off-outline"}
            color="#c2c2c2"
            size={25}
            onPress={() => setHideNewPassword(!hideNewPassword)}
          />
        }
        onChange={(e) => setNewPassword(e.nativeEvent.text)}
        errorMessage={error.newPassword}
      />
      <Input
        placeholder="Repetir nueva contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={hideNewPasswordRepeat}
        rightIcon={
          <MaterialCommunityIcons
            name={hideNewPasswordRepeat ? "eye-outline" : "eye-off-outline"}
            color="#c2c2c2"
            size={25}
            onPress={() => setHideNewPasswordRepeat(!hideNewPasswordRepeat)}
          />
        }
        onChange={(e) => setNewPasswordRepeat(e.nativeEvent.text)}
        errorMessage={error.newPasswordRepeat}
      />
      <Button
        title="Cambiar contraseña"
        containerStyle={styles.btnContainer}
        onPress={updatePassword}
        loading={isLoading}
      />
      <Text>{error.general}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
  },
});

//make this component available to the app
export default ChangePassword;
