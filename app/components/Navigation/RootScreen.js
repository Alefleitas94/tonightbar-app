import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import PubStackScreen from "../StackNavigation/Pubs/StackPubs";
import TopPubsStackScreen from "../StackNavigation/TopPubs/StackTopPubs";
import MyAccountStackScreen from "../StackNavigation/Account/StackMyAccount";
import SearchStackScreen from "../StackNavigation/Search/StackSearch";

const Tab = createMaterialBottomTabNavigator();

const RootScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Pubs"
      activeColor="#000"
      inactiveColor="#9478cc"
      barStyle={{ backgroundColor: "#fff" }}
    >
      <Tab.Screen
        name="Pubs"
        component={PubStackScreen}
        options={{
          tabBarLabel: "Bares",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="compass-outline"
              color="#3390db"
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={TopPubsStackScreen}
        options={{
          tabBarLabel: "Top Bares",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="star-outline"
              color="#3390db"
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: "Buscar",
          tabBarColor: "#fff",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color="#3390db" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyAccountStackScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarColor: "#fff",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color="#3390db"
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootScreen;
