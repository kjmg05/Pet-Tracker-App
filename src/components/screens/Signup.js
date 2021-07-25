import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");

const Signup = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>
          Aqui va todo lo demas de registro de usuario
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PetsProfile_newUser");
          }}
          style={styles.buttonAdd}
        >
          <Text style={styles.text}>Sign in</Text>
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
export default Signup;
