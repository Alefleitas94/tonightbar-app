//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

// create a component
const Login = () => {
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/user-login.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <Text>Form Login</Text>
        <Text>Create Account</Text>
      </View>
      <Divider style={styles.divider} />
      <View style= {styles.viewContainer}>
          <Text>Login Facebook</Text>
      </View>
    </ScrollView>
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
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  divider: {
    margin: 40,
    backgroundColor: "#00a680",
  },
});

//make this component available to the app
export default Login;
