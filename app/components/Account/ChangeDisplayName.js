//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// create a component
const ChangeDisplayName = (props) => {
    
  const { displayName } = props;

  const updateDisplayName = () => {
    console.log("Nombre Actualizado");
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="Nombre"
        containerStyle={styles.input}
        rightIcon={
          <MaterialCommunityIcons
            name="account-circle-outline"
            color="#c2c2c2"
            size={25}
          />
        }
      />
      <Button
        title="Cambiar Nombre"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={updateDisplayName}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 20,
    width: "50%",
  },
  btn: {
    backgroundColor: "#3390db",
  },
});

//make this component available to the app
export default ChangeDisplayName;
