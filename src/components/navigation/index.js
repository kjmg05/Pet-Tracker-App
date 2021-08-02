import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Context as AuthContext } from "../../providers/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import PetInfo from "../screens/PetInfo";
import AddNewPet from "../screens/AddNewPet";
import PetsProfile from "../screens/PetsProfile";
import theme from "../../theme";
const Stack = createStackNavigator();

const Navigation = () => {
  const { state, persistLogin } = useContext(AuthContext);

  useEffect(() => {
    persistLogin();
  }, []);

  SplashScreen.preventAutoHideAsync();

  if (!state.loading) SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      {!state.loading && (
        <>
          {state.loggedIn ? (
            <Stack.Navigator>
              <Stack.Screen
                name="PetsProfile"
                component={PetsProfile}
                style={styles.text}
                options={{ title: 'Pets Profile' }}
              />
              <Stack.Screen
                name="PetInfo"
                component={PetInfo}
                style={styles.text}
                options={{ title: 'Pet information' }}
              />
              <Stack.Screen
                name="AddNewPet"
                component={AddNewPet}
                style={styles.text}
                options={{ title: 'Add new pet' }}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                style={styles.text}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signin"
                options={{ title: 'Log in' }}
                component={Signin}
                style={styles.text}
              />
              <Stack.Screen
                name="Signup"
                options={{ title: 'Sign Up' }}
                component={Signup}
                style={styles.text}
              />
            </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: theme.colors.light,
    fontSize: 20,
  },
});

export default Navigation;
