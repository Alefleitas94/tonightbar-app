//import liraries
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import Loading from "../../components/ActivityIndicator/Loading";

import AddPubForm from "../../components/Pub/AddPubForm";

// create a component
const AddPubs = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const toastRef = useRef();

  return (
    <View>
      <AddPubForm
        navigation={navigation}
        toastRef={toastRef}
        setIsLoading={setIsLoading}
      />
      <Toast ref={toastRef} position="center" opacity={0.5} />
      <Loading isVisible={isLoading} text="Creando Bar.." />
    </View>
  );
};


//make this component available to the app
export default AddPubs;
