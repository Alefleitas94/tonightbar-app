//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SocialIcon } from "react-native-elements";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import { FacebookApi } from "../../utils/Social";
import Loading from "../../components/ActivityIndicator/Loading";

// create a component
const LoginFacebook = () => {

  const login = async () => {

    Facebook.initializeAsync(FacebookApi.aplication_id);

    const {
      type,
      token,
    } = await Facebook.logInWithReadPermissionsAsync(
      FacebookApi.aplication_id,
      { permissions: FacebookApi.permissions }
    );

    if (type === "success") {
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);
      await firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => {
          console.log("Login correcto");
        })
        .catch(() => {
          console.log("Error acceso con Facebook");
        });
    }else if(type === "cancel") {
      console.log('Inicio de sesion con Facebook cancelado')
    }else {console.log('Errr de servidor')}
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
