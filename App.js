import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/components/screens/Home";
import Signin from "./src/components/screens/Signin";
import Signup from "./src/components/screens/Signup";
import PetInfo from "./src/components/screens/PetInfo";
import AddNewPet from "./src/components/screens/AddNewPet";
import {
  PetsProfile_newUser,
  PetsProfile_user,
} from "./src/components/screens/PetsProfile";
import theme from "./src/theme";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.nav} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            style={styles.text}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            style={styles.text}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            style={styles.text}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PetInfo"
            component={PetInfo}
            style={styles.text}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddNewPet"
            component={AddNewPet}
            style={styles.text}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PetsProfile_newUser"
            component={PetsProfile_newUser}
            style={styles.text}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PetsProfile_user"
            component={PetsProfile_user}
            style={styles.text}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    backgroundColor: theme.colors.dark,
  },
  text: {
    textAlign: "center",
    color: theme.colors.light,
    fontSize: 20,
  },
});
