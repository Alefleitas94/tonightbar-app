//import liraries
import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { View, Text, StyleSheet } from "react-native";

// create a component
const MyAccountScreen = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
      console.log(login);
    });
  }, []);

  if (login === null) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (login) {
    return (
      <View style={styles.container}>
        <Text>Usuario Logueado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Usuario no Logueado</Text>
    </View>
  );
}


// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

//make this component available to the app
export default MyAccountScreen;
