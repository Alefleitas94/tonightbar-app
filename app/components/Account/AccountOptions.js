//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import Modal from "../Modals/Modal";

// create a component
const AccountOptions = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const menuOptions = [
    {
      title: "Cambiar Nombres y Apellidos",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent()
    },
    {
      title: "Cambiar Correo Electronico",
      iconType: "material-community",
      iconNameLeft: "email",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => {
        console.log("Change email");
      },
    },
    {
      title: "Cambiar Contraseña",
      iconType: "material-community",
      iconNameLeft: "lock",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => {
        console.log("Change password");
      },
    },
  ];

  const selectedComponent = () => {
      setIsVisibleModal(true);
  }

  return (
    <View>
      {menuOptions.map((menu, index) => (
        <ListItem
          key={index}
          title={menu.title}
          leftIcon={{
            type: menu.iconType,
            name: menu.iconNameLeft,
            color: menu.iconColorLeft,
          }}
          rightIcon={{
            type: menu.iconType,
            name: menu.iconNameRight,
            color: menu.iconColorRight,
          }}
          onPress={menu.onPress}
          containerStyle={styles.menuItem}
        />
      ))}
      <Modal isVisible={isVisibleModal} setIsVisible={setIsVisibleModal}>
        <View>
          <Text>Estoy dentro del modal</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
});

//make this component available to the app
export default AccountOptions;
