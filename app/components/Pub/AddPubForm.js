//import liraries
import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Alert, Dimensions } from "react-native";
import { Icon, Button, Avatar, Input, Image } from "react-native-elements";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

// create a component
const AddPubForm = ({ navigation, toastRef, setIsLoading }) => {
  const [imageSelected, setImageSelected] = useState([]);

  return (
    <ScrollView>
      <UploadImage
        imageSelected={imageSelected}
        setImageSelected={setImageSelected}
        toastRef={toastRef}
      />
    </ScrollView>
  );
};

function UploadImage(props) {
  const { imageSelected, setImageSelected, toastRef } = props;

  const imageSelect = async () => {
    const resultPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    const resultPermissionCamera =
      resultPermission.permissions.cameraRoll.status;

    if (resultPermissionCamera === "denied") {
      toastRef.current.show(
        "Debe aceptar los permisos de la galeria, si los has rechazado, activalos en ajustes",
        5000
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (result.cancelled) {
        toastRef.current.show(
          "Has cerado la galeria sin seleccionar alguna imagen",
          3000
        );
      } else {
        setImageSelected([...imageSelected, result.uri]);
      }
    }
  };

  return (
    <View style={styles.viewImage}>
      {imageSelected.length < 5 && (
        <Icon
          type="material-community"
          name="camera"
          color="#7a7a7a"
          containerStyle={styles.containerIcon}
          onPress={imageSelect}
        />
      )}

      {imageSelected.map((imagePub) => (
        <Avatar
          key={imagePub}
          onPress={() => console.log("Eliminando imagen..")}
          style={styles.miniatureStyle}
          source={{ uri: imagePub }}
        />
      ))}
    </View>
  );
}

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
