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
        backgroundColor: "#22a6ce",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center",
    }}
  >
    <SearchStack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        title: "Buscar",
      }}
    />
  </SearchStack.Navigator>
);

export default SearchStackScreen;
