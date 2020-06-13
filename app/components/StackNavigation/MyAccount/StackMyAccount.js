import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Importando Screen Bars
import MyAccountScreen from "../../../screens/MyAccount/MyAccountScreen";

//Creando el stack MyAccount
const MyAccountStack = createStackNavigator();

//Creando el stak de rutas de MyAccount
const MyAccountStackScreen = () => (
  <MyAccountStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#62ad4f",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center",
    }}
  >
    <MyAccountStack.Screen
      name="MyAccount"
      component={MyAccountScreen}
      options={{
        title: "Mi Perfil",
      }}
    />
  </MyAccountStack.Navigator>
);

export default MyAccountStackScreen;
