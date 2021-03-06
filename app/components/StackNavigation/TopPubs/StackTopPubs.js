import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";


//Importando Screen Bars
import TopPubsScreen from '../../../screens/TopPubs/TopPubsScreen';

//Creando el Stack de TopBars
const TopPubsStack = createStackNavigator();

const TopPubsStackScreen = () => (
    <TopPubsStack.Navigator
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
        <TopPubsStack.Screen
              name="TopBars"
                  component={TopPubsScreen}
                  options={{
                      title: "Top Bares",
                  }}
        />
    </TopPubsStack.Navigator>
)

export default TopPubsStackScreen;