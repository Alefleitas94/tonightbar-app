import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

//Importando Screen Bars
import BarsScreen from '../../../screens/Bars/BarsScreen';


//Creando el Stack de Bars
const BarStack = createStackNavigator();


//Creando el stack de screens de Bars
 const BarStackScreen = ({navigation}) => {
    return (
      <BarStack.Navigator
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
        <BarStack.Screen
                name="Bars"
                  component={BarsScreen}
                  options={{
                      title: "Bares",
                  }}
        />
      </BarStack.Navigator>
    );
};


export default BarStackScreen;