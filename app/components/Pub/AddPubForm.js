//import liraries
import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Alert, Dimensions } from "react-native";
import { Icon, Button, Avatar, Input, Image } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// create a component
const AddPubForm = ({ navigation, toastRef, setIsLoading }) => {
  const [imageSelected, setImageSelected] = useState([]);

  return (
    <ScrollView>
      <UploadImage
        imageSelected={imageSelected}
        setImageSelected={setImageSelected}
      />
    </ScrollView>
  );
};

function UploadImage(props)  {
  const { imageSelected, setImageSelected } = props;

  return (
    <View style={styles.viewImage}>
      <Icon
        type="material-community"
        name="camera"
        color="#7a7a7a"
        containerStyle={styles.containerIcon}
        onPress={() => console.log("Subiendo imagen..")}
      />
      <Avatar
        onPress={() => console.log("Eliminando imagen..")}
        style={styles.miniatureStyle}
        
        //source={{//Url miniatura del restaurante}}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  viewImage: {
    flexDirection: "row",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 30,
  },
  containerIcon: {
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 70,
    marginRight: 10,
    backgroundColor: "#e3e3e3",
  },
  miniatureStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
    backgroundColor: "#e3e3e3",
  },
});

//make this component available to the app
export default AddPubForm;
