//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input, Icon } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



//utils
import {validateEmail} from '../../utils/Validation';

// create a component
const LoginForm = (props) => {
  
  const {toastRef} = props;

  //Visible Input
  const [hidePassword, setHidePassword] = useState(false);

  //State Inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const login = () => {

     if ((!email) || (!password)){
      console.log('Todos los campos son obligatorios');
      toastRef.current.show('Todos los campos son obligatorios', 2000)
     }else {
       if (!validateEmail(email)) {
        console.log('El email es incorrecto');
       }else {
         console.log('Login correcto')
       }
     }

  }

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.inputForm}
        onChange={(e) => setEmail(e.nativeEvent.text)}
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
        onChange={(e) => setPassword(e.nativeEvent.text)}
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
