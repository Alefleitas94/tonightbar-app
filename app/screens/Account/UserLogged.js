//import liraries
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
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
  }, [userInfo]);

  return (
    <View >
      <InfoUser userInfo= {userInfo} />
      <Button title="Cerrar sesion" onPress={() => firebase.auth().signOut()} />
    </View>
  );
};

//make this component available to the app
export default UserLogged;
