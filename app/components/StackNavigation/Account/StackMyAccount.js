import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import components
import MyAccountScreen from "../../../screens/Account/MyAccountScreen";
import LoginScreen from '../../../screens/Account/Login';
import RegisterScreen from '../../../screens/Account/Register'

//Creando el stack MyAccount
const MyAccountStack = createStackNavigator();

//Creando el stak de rutas de MyAccount
const MyAccountStackScreen = () => (
  <MyAccountStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#2766c4",
      },
      headerTintColor: "#fff",
      headerTitleAlign: "center",
    }}
  >
    <MyAccountStack.Screen
      name="MyAccount"
      component={MyAccountScreen}
      options={{
        title: "Perfil",
      }}
    />
    <MyAccountStack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        title: "Iniciar Sesión",
      }}
    />
     <MyAccountStack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        title: "Registro",
      }}
    />
  </MyAccountStack.Navigator>
);

export default MyAccountStackScreen;
