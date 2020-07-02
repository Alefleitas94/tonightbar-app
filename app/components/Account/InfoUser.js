//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
// create a component
const InfoUser = ({ userInfo }) => {
  const avatarDefault = "https://api.adorable.io/avatars/75/abott@adorable.png";
  const { photoURL, email, uid, displayName } = userInfo;
  console.log(photoURL);

  const changeAvatar = () => {
    console.log(photoURL);
  };

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        size={70}
        rounded
        showEditButton
        onEditPress={changeAvatar}
        containerStyle={styles.userInfoAvatar}
        source={{ uri: photoURL ? photoURL : avatarDefault }}
      />
      <View>
        <Text style={styles.displayName} >{displayName ? displayName : 'Anónimo'}</Text>
        <Text>{email? email : 'Social Login'} </Text>
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
  userInfoAvatar: {marginRight: 20},
  displayName: {
    fontWeight: 'bold'
  }
});

//make this component available to the app
export default InfoUser;
