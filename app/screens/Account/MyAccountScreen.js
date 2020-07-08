//import liraries
import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { View, Text, StyleSheet } from "react-native";
import Loading from "../../components/ActivityIndicator/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

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
      <View>
        <Loading isVisible={true} text="Cargando" />
      </View>
    );
  };

  return login ? <UserLogged /> : <UserGuest />
};
//make this component available to the app
export default MyAccountScreen;
