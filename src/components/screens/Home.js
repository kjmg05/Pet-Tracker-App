import React, { useContext, useState, useEffect } from "react";

import {StyleSheet,View,SafeAreaView,Dimensions,TouchableOpacity,ScrollView,ActivityIndicator,} from "react-native";
import { Button, Text } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import theme from "../../theme";
import { ListItem, Avatar } from "react-native-elements";



function Home({ navigation }) {
  const { signout } = useContext(AuthContext);

  return (
    <View>
      {/* <Text>Welcome from home screen</Text>
      
      <TouchableOpacity onPress={() => {navigation.navigate("AddNewPet"); }} style={styles.buttonAdd}>
          <Text style={styles.text}>Add new pet 🐾</Text>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => {navigation.navigate("PetsProfile_user"); }} style={styles.buttonAdd}>
          <Text style={styles.text}>profile 🐾</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate("AddNewPet")}>
        <Text>
          Don't have an account? <Text style={styles.signup}>AddNewPet</Text>
        </Text>
      </TouchableOpacity>


      <Button onPress={signout}>Signout</Button> */}
    </View>
  );
}

const styles = StyleSheet.create({


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

export default Home;
