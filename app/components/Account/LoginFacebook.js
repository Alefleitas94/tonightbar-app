//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SocialIcon } from "react-native-elements";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import { FacebookApi } from "../../utils/Social";
import Loading from "../../components/ActivityIndicator/Loading";

// create a component
const LoginFacebook = (props) => {
  const { toastRef } = props;
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);

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
      setIsVisible(true);
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);
      await firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => {
          console.log("Login correcto");
          navigation.navigate("MyAccount");
        })
        .catch(() => {
          toastRef.current.show("Error acceso con Facebook");
        });
    } else if (type === "cancel") {
      toastRef.current.show("Inicio de sesion con Facebook cancelado");
    } else {
      toastRef.current.show("Error de servidor");
    }
    setIsVisible(false);
  };
  return (
    <>
      <SocialIcon
        title="Entrar con Facebook"
        button
        type="facebook"
        onPress={login}
      />
      <Loading isVisible={isVisible} text= "Redirigiendo.." />
    </>
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
