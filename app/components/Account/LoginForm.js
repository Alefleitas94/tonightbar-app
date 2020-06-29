//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input, Icon } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// create a component
const LoginForm = () => {
  const [hidePassword, setHidePassword] = useState(false);

  const login = () => {
      console.log('Logueado');
  }

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.inputForm}
        onChange={() => console.log("Email")}
        rightIcon={
          <MaterialCommunityIcons
            name="email-outline"
            color="#c1c1c1"
            size={20}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        password={true}
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        onChange={() => console.log("Contraseña modificada ")}
        rightIcon={
          <MaterialCommunityIcons
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            color="#c1c1c1"
            size={20}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Button
        containerStyle={styles.btnContainerLogin}
        title="Iniciar Sesion"
        buttonStyle={styles.btnLogin}
        onPress= {login}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#2c3e50",
  },
  inputForm: {
    width: "100%",
    marginTop: 10,
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
    marginHorizontal: 5
  },
  btnLogin: {
    backgroundColor: "#3390db",
  },
});

//make this component available to the app
export default LoginForm;
