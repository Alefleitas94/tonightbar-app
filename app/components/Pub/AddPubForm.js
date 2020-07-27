//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const AddPubForm = ({navigation, toastRef, setIsLoading}) => {
    console.log(navigation);
    return (
        <View style={styles.container}>
            <Text>AddPubForm</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default AddPubForm;

