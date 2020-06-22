import React from 'react';
import { View, Text,ScrollView, StyleSheet, Image } from 'react-native';
import Button from 'react-native-elements';

// create a component
const UserGuest = () => {
    return (
        <ScrollView style={styles.viewBody} centerContent= {true}>
           <Image
               source= {require("../../../assets/img/user-guest.jpg")}
               style= {styles.image}
               resizeMode= "contain"
           />
           <Text style={styles.title}>
               Consulta tu perfil de Space Bar
           </Text>
           <Text style={styles.description}>
               Encuentra los mejores bares de la zona, dejanos saber tus opiniones y disfruta de la experiencia que te ofrece
               Space Bar
           </Text>
        </ScrollView>
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
    viewBody: {
        marginLeft: 30,
        marginRight: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 40
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 10,
        textAlign: 'center'
    },
    description: {
        textAlign: 'center',
        marginBottom: 20
    }
});

//make this component available to the app
export default UserGuest;
