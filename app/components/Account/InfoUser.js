//import liraries
import React from "react";
import { Avatar, Button } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// create a component
const InfoUser = ({ userInfo }) => {
  const avatarDefault = "https://api.adorable.io/avatars/75/abott@adorable.png";
  const { photoURL, email, uid, displayName } = userInfo;

  const changeAvatar = async () => {
    const resultPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    const resultPermissionCamera =
      resultPermission.permissions.cameraRoll.status;

    if (resultPermissionCamera === "denied") {
      console.log("Debe aceptar los permisos ");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 4],
      });

      if (result.cancelled) {
        console.log("Has cerrado la galeria de imagenes");
      } else {
        uploadImage(result.uri, uid).then(() => {
          console.log("Imagen actualizada correctamente");
          updatePhotoUrl(uid);
        });
      }
    }
  };

  const uploadImage = async (uri, nameImage) => {
    const response = await fetch(uri);
   
    const json = await JSON.stringify(response);
    const parse = await JSON.parse(json);

    const blob = await parse._bodyBlob;
    const ref = firebase.storage().ref().child(`avatar/${nameImage} `);
    ref.put(blob);
  };

  const updatePhotoUrl = (uid) => {
    firebase
      .storage()
      .ref()
      .child(`avatar/${uid} `)
      .getDownloadURL()
      .then(async (result) => {
        const update = {
          photoURL: result,
        };
        await firebase.auth().currentUser.updateProfile(update);
      })
      .catch(() => console.log("Error al recuperar el avatar del servidor"));
  };

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size={70}
        source={{ uri: photoURL ? photoURL : avatarDefault }}
        containerStyle={styles.containerStyle}
      />

      <View>
        <Text style={styles.displayName}>
          {displayName ? displayName : "Anónimo"}
        </Text>
        <Text style={styles.displayName}>
          {email ? email : "Social Login"}{" "}
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  displayName: {
    fontWeight: "bold",
    marginLeft: 20,
  },
  containerStyle: {
    marginTop: 10
  }
 
});

//make this component available to the app
export default InfoUser;
