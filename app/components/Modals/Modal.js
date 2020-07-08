//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Overlay} from 'react-native-elements';

// create a component
const Modal = (props) => {

    const {isVisible, setIsVisible, children} = props;
    const closeModal = () => setIsVisible(false);
    


    return (
       <Overlay
       isVisible= {isVisible}
       windowBackgroundColor= 'rgba(0,0,0,.5)'
       overlayBackgroundColor= 'transparent'
       overlayStyle= {styles.overlay}
       onBackdropPress = {closeModal}
       >
        {children}
       </Overlay>
    );
};

// define your styles
const styles = StyleSheet.create({
    overlay:  {
        height: 'auto',
        width: '90%',
        backgroundColor: '#fff'
    },
});

//make this component available to the app
export default Modal;
