//import liraries
import React, {useRef} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from 'react-native-easy-toast';

//import components
import RegisterForm from '../../components/Account/RegisterForm';

// create a component
const Register = () => {

  const toastRef = useRef()

  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/img/user-login.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewForm}>
        <RegisterForm toastRef={toastRef} />
      </View>
      <Toast style={styles.toast} ref={toastRef} position="top"/>
    </KeyboardAwareScrollView>
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
    marginTop: 10,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
  toast: {
    marginTop: 40,
    backgroundColor: '#ee564b'
  }
});

//make this component available to the app
export default Register;
