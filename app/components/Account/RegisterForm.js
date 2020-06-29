//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { validateEmail } from "../../utils/Validation";
import * as firebase from 'firebase';

// create a component
const RegisterForm = (props) => {

  const {toastRef} = props;

  //Hide Password
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setHideRepeatPassword] = useState(true);

  //Inputs States

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");

  const register = async () => {
    if (!email || !password || !repeatPass) {
      console.log("Todos los campos son obligatorios");
      toastRef.current.show("Todos los campos son obligatorios", 2000);
    }else {
      if (!validateEmail(email)) {
        console.log('El email no es correcto');
        toastRef.current.show('El email no es correcto',2000);
      }else{
        if(password !== repeatPass){
          console.log('Las contraseñas no coinciden');
          toastRef.current.show('Las contraseñas no coinciden',2000);
        }else {
          await firebase.auth().createUserWithEmailAndPassword(email,password).then(() => {console.log('Usuario Registrado!')}).catch(() => {console.log('Error al crear la cuenta, intentelo mas tarde')})
        }
      }
    }
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo Electrónico"
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
      <Input
        placeholder="Repetir Contraseña"
        password={true}
        secureTextEntry={hideRepeatPassword}
        containerStyle={styles.inputForm}
        onChange={(e) => setRepeatPass(e.nativeEvent.text)}
        rightIcon={
          <MaterialCommunityIcons
            name={hideRepeatPassword ? "eye-outline" : "eye-off-outline"}
            color="#c1c1c1"
            size={20}
            onPress={() => setHideRepeatPassword(!hideRepeatPassword)}
          />
        }
      />
      <Button
        title="Registrarse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={register}
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
    marginTop: 10,
  },
  btnContainerRegister: {
    marginTop: 10,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
});

//make this component available to the app
export default RegisterForm;
