//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SocialIcon } from "react-native-elements";

// create a component
const LoginFacebook = () => {

  const login = () => {
    console.log("Entrando con facebook");
  };

  return (
    <SocialIcon
      title="Entrar con Facebook"
      button
      type="facebook"
      onPress={login}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default LoginFacebook;
