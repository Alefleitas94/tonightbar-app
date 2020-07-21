//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as firebase from "firebase";

// create a component
const ChangeDisplayName = ({
  displayName,
  setIsVisibleModal,
  setReloadData,
  toastRef,
}) => {
  const [newDisplayName, setNewDisplayName] = useState(null);

  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const updateDisplayName = () => {
    setError(null);
    if (!newDisplayName) {
      setError("El nombre de usuario no ha cambiado");
    } else {
      setIsLoading(true);
      const update = {
        displayName: newDisplayName,
      };
      firebase
        .auth()
        .currentUser.updateProfile(update)
        .then(() => {
          setIsLoading(false);
          setReloadData(true);
          toastRef.current.show("Nombre actualizado correctamente");
          setIsVisibleModal(false);
        })
        .catch(() => {
          console.log("Error al actualizar el nombre");
          setIsLoading(false);
        });
    }
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="Nombre"
        containerStyle={styles.input}
        rightIcon={
          <MaterialCommunityIcons
            name="account-circle-outline"
            color="#c2c2c2"
            size={25}
          />
        }
        defaultValue={displayName && displayName}
        onChange={(e) => setNewDisplayName(e.nativeEvent.text)}
        errorMessage={error}
      />
      <Button
        title="Cambiar Nombre"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={updateDisplayName}
        loading={isLoading}
      />
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
  btn: {
    backgroundColor: "#3390db",
  },
});

//make this component available to the app
export default ChangeDisplayName;
