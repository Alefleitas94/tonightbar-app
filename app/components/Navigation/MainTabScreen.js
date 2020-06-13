import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import BarStackScreen from "../StackNavigation/Bars/StackBars";
import TopBarsStackScreen from '../StackNavigation/TopBars/StackTopBars';
import MyAccountStackScreen from '../StackNavigation/MyAccount/StackMyAccount';
import SearchStackScreen from '../StackNavigation/Search/StackSearch';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>{ 
  
  return (

  <Tab.Navigator initialRouteName="Bars" activeColor="#fff">
    <Tab.Screen
      name="Bars"
      component= {BarStackScreen}
      options={{
                tabBarLabel: "Bares",
                tabBarColor: '#62ad4f',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="compass-outline" color={color} size={26} />
                )
            }}
    />
    <Tab.Screen
      name="TopBars"
      component={TopBarsStackScreen}
      options={{
        tabBarLabel: "Top Bares",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cup" color={color} size={26} />
        ),
      }}
    />
      <Tab.Screen
      name="Search"
      component= {SearchStackScreen}
      options = {{
        tabBarLabel: 'Buscar',
        tabBarColor: '#22a6ce',
        tabBarIcon: ({color}) => (
          <Icon name='ios-search' color={color} size= {26}/>
        )
      }}
    />
    <Tab.Screen
      name="Profile"
      component= {MyAccountStackScreen}
      options = {{
        tabBarLabel: 'Mi Perfil',
        tabBarColor: '#d45d40',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name='account' color={color} size= {26}/>
        )
      }}
    />
  </Tab.Navigator>
);}

export default MainTabScreen;
