//import liraries
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import {useNavigation} from '@react-navigation/native';
import * as firebase from 'firebase';

// create a component
const BarsScreen = () => {

const [user, setUser] = useState(null);


useEffect(()=> {
  firebase.auth().onAuthStateChanged(userInfo => (setUser(userInfo)))
}, [])

  return (
    <View style={styles.container}>
      <Text>Estamos en Bars</Text>
      {user && <AddPubsButton />}
      
    </View>
  );
};

function AddPubsButton() {
  const navigation = useNavigation();
  return (
    <ActionButton
      style= {styles.btnAction}
      buttonColor="#00a680"
      onPress={() => navigation.navigate('AddPubs')}
    />
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
  btnAction: {
     
  }
});

//make this component available to the app
export default BarsScreen;
