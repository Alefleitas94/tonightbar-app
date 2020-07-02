//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Avatar} from 'react-native-elements';
// create a component
const InfoUser = ({infoUser}) => {
    console.log(infoUser);

    return (
        <View style={styles.container}>
            <Text>InfoUser</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default InfoUser;
