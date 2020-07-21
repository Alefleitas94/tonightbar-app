//import liraries
import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";
import InfoUser from "../../components/Account/InfoUser";
import AccountOptions from '../../components/Account/AccountOptions';

// create a component
const UserLogged = () => {

  const [userInfo, setUserInfo] = useState({});
  const [reloadData, setReloadData] = useState(false);
  const toastRef = useRef();


  useEffect(() => {
    const infoAccount = async () => {
      const user = await firebase.auth().currentUser;
      console.log(user);
      setUserInfo(user.providerData[0]);
    };
    infoAccount();
    setReloadData(false)
  }, [reloadData]);

  return (
    <View style= {styles.viewUserInfo}>
      <InfoUser userInfo = {userInfo} />
      <AccountOptions userInfo = {userInfo} setReloadData ={setReloadData} toastRef={useRef}  />
      <Button 
      title="Cerrar sesion" 
      titleStyle= {styles.btnTitleStyle}
      buttonStyle= {styles.btnCloseSession}
      onPress={() => firebase.auth().signOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewUserInfo : {
    minHeight: "100%",
    backgroundColor: '#f2f2f2'
  },
  btnCloseSession: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
    paddingTop: 10,
    paddingBottom: 10
  },
  btnTitleStyle: {
    color: '#156dc5'
  }
});



//make this component available to the app
export default UserLogged;
