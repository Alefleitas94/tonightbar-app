//import liraries
import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { Divider } from "react-native-elements";
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-easy-toast';
//import components
import LoginForm from '../../components/Account/LoginForm';

import LoginFacebook from '../../components/Account/LoginFacebook';

// create a component
const Login = () => {

  const toastRef = useRef();


  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/user-login.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <LoginForm  toastRef={toastRef} />
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.viewFacebook}>
        <LoginFacebook toastRef={toastRef}/>
      </View>
      <Toast style={styles.toast} ref={toastRef} position="top"/>
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
    marginTop:10,
    marginHorizontal: 40
  },
  viewFacebook:{
    
    marginHorizontal: 40
  },
  txtRegister: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
  },
  btnRegister: {
    color: "#00a680",
  },
  divider: {
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: "#00a680",
    marginHorizontal: 40
  },
  toast: {
    top: 40,
    backgroundColor: '#ee564b',
    width: '80%',
    alignItems: 'center'
  }
});

//make this component available to the app
export default Login;
