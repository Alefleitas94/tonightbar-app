//import liraries
import React from "react";
import Avatar, { IconTypes } from "rn-avatar";
import { View, Text, StyleSheet } from "react-native";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

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
        aspect: [4, 3],
      });

      if (result.cancelled) {
        console.log("Has cancelado");
      } else {
        uploadImage(result.uri, uid);
      }
    }
  };

  const uploadImage = (uri, nameImage) => {

  }

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        showEditButton
        size={70}
        source={{ uri: photoURL ? photoURL : avatarDefault }}
        containerStyle={{ marginRight: 20 }}
        onEditPress={changeAvatar}
        editButton={{
          name: "edit",
          type: IconTypes.Entypo,
        }}
      />
      <View>
        <Text style={styles.displayName}>
          {displayName ? displayName : "Anónimo"}
        </Text>
        <Text>{email ? email : "Social Login"} </Text>
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
  },
});

//make this component available to the app
export default InfoUser;
