import React, { useState, useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Caption, Text, TextInput } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import theme from "../../theme";

const SigninForm = () => {
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleVerify = (input) => {
    if (input === "email") {
      if (!email) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "signin") {
      if (email && password && !emailError && !passwordError) {
        signin(email, password);
      }
    }
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        label="Email"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
        onBlur={() => handleVerify("email")}
      />
      {emailError && <Caption>Please enter your e-mail address.</Caption>}
      <TextInput
        mode="outlined"
        label="Password"
        autoCapitalize="none"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        onBlur={() => handleVerify("password")}
      />
      {passwordError && <Caption>Please enter your password.</Caption>}
      <TouchableOpacity
        onPress={() => {
          handleVerify("signin");
        }}
        style={styles.buttonLogin}
      >
        <Text style={styles.text}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    width: 300,
    height: 40,
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 5,
    elevation: 15,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: theme.colors.dark,
  },
});

export default SigninForm;
