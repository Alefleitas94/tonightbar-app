//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// create a component
const RegisterForm = () => {

    const register = () => {
        console.log('Registrado exitosamente')
    }

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo Electrónico"
        containerStyle={styles.inputForm}
        onChange={() => console.log("email actualizado")}
        rightIcon={
          <MaterialCommunityIcons
            name="email-outline"
            color="#c1c1c1"
            size={18}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        password={true}
        secureTextEntry={true}
        containerStyle={styles.inputForm}
        onChange={() => console.log("email actualizado")}
        rightIcon={
          <MaterialCommunityIcons
            name="eye-outline"
            color="#c1c1c1"
            size={18}
          />
        }
      />
      <Input
        placeholder="Repetir Contraseña"
        containerStyle={styles.inputForm}
        onChange={() => console.log("email actualizado")}
        rightIcon={
          <MaterialCommunityIcons
            name="eye-outline"
            color="#c1c1c1"
            size={18}
          />
        }
      />
      <Button
        title="Registrarse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle= {styles.btnRegister}
        onPress= {register}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 2,
  },
  btnContainerRegister: {
    marginTop: 10,
    width: "95%",
  },
  btnRegister: {
      backgroundColor: '#00a680'
  }
});

//make this component available to the app
export default RegisterForm;
