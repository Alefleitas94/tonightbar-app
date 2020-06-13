import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import MainTabScreen from './MainTabScreen';



const NavigationStack = () => (
    <NavigationContainer>
            <MainTabScreen/>
    </NavigationContainer>
)

export default NavigationStack;