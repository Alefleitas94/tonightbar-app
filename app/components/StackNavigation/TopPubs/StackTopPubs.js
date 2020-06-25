import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";


//Importando Screen Bars
import TopBarsScreen from '../../../screens/TopBars/TopBarsScreen';

//Creando el Stack de TopBars
const TopBarsStack = createStackNavigator();

const TopBarsStackScreen = () => (
    <TopBarsStack.Navigator
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
        <TopBarsStack.Screen
              name="TopBars"
                  component={TopBarsScreen}
                  options={{
                      title: "Top Bares",
                  }}
        />
    </TopBarsStack.Navigator>
)

export default TopBarsStackScreen;