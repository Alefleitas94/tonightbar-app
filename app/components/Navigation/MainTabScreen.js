import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import BarStackScreen from "../StackNavigation/Bars/StackBars";
import TopBarsStackScreen from '../StackNavigation/TopBars/StackTopBars';
import MyAccountStackScreen from '../StackNavigation/Account/StackMyAccount';
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
                tabBarColor: '#2766c4',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="compass-outline" color={color} size={26} />
                )
            }}
    />
    <Tab.Screen
      name="Ranking"
      component={TopBarsStackScreen}
      options={{
        tabBarLabel: "Top Bares",
        tabBarColor: "#2766c4",
        tabBarIcon: ({ color }) => (
          <Icon name="star" color={color} size={26} />
        ),
      }}
    />
      <Tab.Screen
      name="Search"
      component= {SearchStackScreen}
      options = {{
        tabBarLabel: 'Buscar',
        tabBarColor: '#2766c4',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name='magnify' color={color} size= {26}/>
        )
      }}
    />
    <Tab.Screen
      name="Profile"
      component= {MyAccountStackScreen}
      options = {{
        tabBarLabel: 'Mi Perfil',
        tabBarColor: '#2766c4',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name='account-circle' color={color} size= {26}/>
        )
      }}
    />
  </Tab.Navigator>
);}

export default MainTabScreen;
