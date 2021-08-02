import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import SigninForm from "../forms/SigninForm";
import theme from "../../theme";

function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://raw.githubusercontent.com/kjmg05/Pet-Tracker-App/devBranch/assets/img/petTracker.png",
          }}
        />
      </View>
      <SigninForm />
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>
          Don't have an account? <Text style={styles.signup}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.backgroundWhite,
  },
  viewLogo: {
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
  forgotPassword: {
    textAlign: "auto",
  },
  signup: {
    color: theme.colors.darkBlue,
  },
});

export default Signin;
