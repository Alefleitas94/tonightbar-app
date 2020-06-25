import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

//Importando Screen Bars
import PubsScreen from '../../../screens/Pubs/PubsScreen';


//Creando el Stack de Bars
const PubStack = createStackNavigator();


//Creando el stack de screens de Bars
 const PubStackScreen = ({navigation}) => {
    return (
      <PubStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2766c4",
          },
          headerTintColor: "#fff",
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
      </PubStack.Navigator>
    );
};


export default PubStackScreen;