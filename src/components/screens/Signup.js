import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Text } from "react-native-paper";
import theme from "../../theme";
import SignupForm from "../forms/SignupForm";

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewLogo}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://raw.githubusercontent.com/kjmg05/Pet-Tracker-App/devBranch/assets/img/petTracker.png",
            }}
          />
        </View>
        <SignupForm />
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text>
            Already have an account? <Text style={styles.signin}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.backgroundWhite,
  },
  signin: {
    color: theme.colors.darkBlue,
  },
  viewLogo: {
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
});

export default Signup;
