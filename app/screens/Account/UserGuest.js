import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import {Button} from "react-native-elements";
import {useNavigation} from '@react-navigation/native'
//import components


// create a component
const UserGuest = (props) => {

  const navigation = useNavigation();

  console.log(props);

  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image
        source={require("../../../assets/img/user-guest.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Consulta tu perfil de Tonight Bar</Text>
      <Text style={styles.description}>
        Encuentra los mejores bares de la zona, dejanos saber tus opiniones y
        disfruta de la experiencia que te ofrece Tonight Bar

      </Text>
      <View style={styles.viewBtn}>
          <Button
              buttonStyle = {styles.buttonStyle}
              containerStyle= {styles.btnContainer}
              title= 'Ver tu perfil'
              onPress={() => navigation.navigate("Login")}
          />
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontFamily: 'sans-serif-light' ,
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 30,
  },
  viewBtn: {
      flex: 1,
      alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: '#3390db'
  },
  btnContainer: {
     
      width: '70%',

  }
});

//make this component available to the app
export default UserGuest;
