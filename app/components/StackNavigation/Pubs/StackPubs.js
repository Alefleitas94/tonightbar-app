import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

//Importando Screens
import PubsScreen from '../../../screens/Pubs/PubsScreen';
import AddPubsScreen from '../../../screens/Pubs/AddPubs';


//Creando el Stack de Bars
const PubStack = createStackNavigator();


//Creando el stack de screens de Bars
 const PubStackScreen = ({navigation}) => {
    return (
      <PubStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#3390db",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <PubStack.Screen
                name="Bars"
                  component={PubsScreen}
                  options={{
                      title: "Bares",
                  }}
        />
        <PubStack.Screen
          name="AddPubs"
          component= {AddPubsScreen}
          options= {{
            title: 'Nuevo Restaurante'
          }}
        />
      </PubStack.Navigator>
    );
};


export default PubStackScreen;