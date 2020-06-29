import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Importando Screen Bars
import SearchScreen from "../../../screens/Search/SearchScreen";

//Creando el stack MyAccount
const SearchStack = createStackNavigator();

//Creando el stak de rutas de MyAccount
const SearchStackScreen = () => (
  <SearchStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTintColor: "#3390db",
      
      headerTitleAlign: "center",
    }}
  >
    <SearchStack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        title: "Busca tu restaurante",
      }}
    />
  </SearchStack.Navigator>
);

export default SearchStackScreen;
