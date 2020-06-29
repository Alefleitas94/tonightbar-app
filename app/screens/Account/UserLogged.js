//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";

// create a component
const UserLogged = () => {
  return (
    <View style={styles.container}>
      <Text>UserLogged</Text>
      <Button title="Cerrar sesion" onPress={() => firebase.auth().signOut()} />
    </View>
  );
};

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
export default UserLogged;
