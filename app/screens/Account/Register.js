//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// create a component
const Register = () => {
    return (
        <KeyboardAwareScrollView >
            <Image
                source= {require('../../../assets/img/user-login.png')}
                style= {styles.logo}
                resizeMode= "contain"
            />
            <View style={styles.viewForm}>
                
            </View>
        </KeyboardAwareScrollView>
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
    logo: {
        width:"100%",
        height: 150,
        marginTop: 20
    }
});

//make this component available to the app
export default Register;
