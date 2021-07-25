import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");

const Signin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>
          Aqui va todo lo demas de inicio de sesion
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PetsProfile_user");
          }}
          style={styles.buttonAdd}
        >
          <Text style={styles.text}>Log in</Text>
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
    marginTop: 20,
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

export default Signin;
