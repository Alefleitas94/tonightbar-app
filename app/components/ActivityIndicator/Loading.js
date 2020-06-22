import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading(param) {
  const { isVisible, text } = param;

  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size="small" color="#00ff00" />
        {text && (<Text style={styles.text}>{text}</Text>)}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "#00a680",
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
      color:'#00a680',
      textTransform: 'uppercase',
      marginTop: 10
  }
});
