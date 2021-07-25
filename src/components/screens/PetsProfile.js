import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");

export const PetsProfile_newUser = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddNewPet");
          }}
          style={styles.buttonAdd}
        >
          <Text style={styles.text}>Add new pet 🐾</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Aqui va la imagen</Text>
      </View>
    </SafeAreaView>
  );
};

export const PetsProfile_user = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddNewPet");
          }}
          style={styles.buttonAdd}
        >
          <Text style={styles.text}>Add new pet 🐾</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PetInfo");
          }}
          style={styles.buttonAdd}
        >
          <Text style={styles.text}>
            Aqui lo demas del listado de mascotas que abre pet info
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: theme.colors.dark,
    fontWeight: "300",
  },
  buttonAdd: {
    width: 300,
    height: 50,
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 5,
    elevation: 15,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
