//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as firebase from "firebase";
import { reAuthenticate } from "../../utils/Api";

// create a component
const ChangeEmail = ({ email, setIsVisibleModal, setReloadData, toastRef }) => {
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const updateEmail = () => {
    setError({});
    if (!newEmail || email === newEmail) {
      setError({ email: "El email no puede ser igual o estar vacio" });
    } else {
      setIsLoading(true);
      reAuthenticate(password)
        .then(() => {
          firebase
            .auth()
            .currentUser.updateEmail(newEmail)
            .then(() => {
              setIsLoading(false);
              setReloadData(true);
              toastRef.current.show('Email actualizado correctamente');
              setIsVisibleModal(false);
            })
            .catch(() => {
              setError({ email: "Error al actualizar el email" });
              setIsLoading(false);
            });
        })
        .catch(() => {
          setError({ password: "La contraseña no es correcta" });
          setIsLoading(false);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        defaultValue={email && email}
        onChange={(e) => setNewEmail(e.nativeEvent.text)}
        rightIcon={
          <MaterialCommunityIcons
            name="email-outline"
            color="#c2c2c2"
            size={25}
          />
        }
        errorMessage={error.email}
      />
      <Input
        placeholder="Contraseña"
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
      <Button
        title="Cambiar Email"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={updateEmail}
        loading={isLoading}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    marginBottom: 10,
    marginTop: 10,
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
  },
  btn: {},
});

//make this component available to the app
export default ChangeEmail;
