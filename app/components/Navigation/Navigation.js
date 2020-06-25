import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import RootScreen from './RootScreen';



const NavigationStack = () => (
    <NavigationContainer>
            <RootScreen/>
    </NavigationContainer>
)

export default NavigationStack;