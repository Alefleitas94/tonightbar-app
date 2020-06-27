//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

//import components

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
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.viewContainer}>
        <Text>Login Facebook</Text>
      </View>
    </ScrollView>
  );
};

const CreateAccount = (props) => {
  const {} = props;
  const navigation = useNavigation();
  return (
    <Text style={styles.txtRegister}>
      ¿Aún no tienes una cuenta?{" "}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("Register")}
      >
        Regístrate
      </Text>
    </Text>
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
  txtRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
  },
  btnRegister: {
    color: "#00a680",
  },
  divider: {
    margin: 40,
    backgroundColor: "#00a680",
  },
});

//make this component available to the app
export default Login;
