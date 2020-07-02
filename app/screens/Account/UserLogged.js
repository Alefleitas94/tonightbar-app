//import liraries
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";
import InfoUser from "../../components/Account/InfoUser";

// create a component
const UserLogged = () => {

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const infoAccount = async () => {
      const user = await firebase.auth().currentUser;
      console.log(user);
      setUserInfo(user.providerData[0]);
    };
    infoAccount();
  }, []);

  return (
    <View style={styles.container}>
      <InfoUser userInfo= {userInfo} />
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
