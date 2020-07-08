//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ListItem} from 'react-native-elements'

// create a component
const AccountOptions = () => {

    const menuOptions = [{
        title: 'Cambiar Nombres y Apellidos',
        iconType: 'material-community',
        iconNameLeft: 'account-circle',
        iconColorLeft: '#ccc',
        iconNameRight: 'chevron-right',
        iconColorRight: "#ccc",
        onPress: () => {console.log('Change display name')}
    }];

    return (
        <View >
            {menuOptions.map((menu, index)=> (
                <ListItem
                    key= {index}
                    title= {menu.title}
                    leftIcon= {{
                        type: menu.iconType,
                        name: menu.iconNameLeft,
                        color: menu.iconColorLeft}}
                    rightIcon= {{
                        type: menu.iconType,
                        name: menu.iconNameRight,
                        color: menu.iconColorRight
                    }}
                />
            ))}
        </View>
    );
};



//make this component available to the app
export default AccountOptions;
