import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import theme from "../../theme";
import firebase from "../database/firebase";

const { width, height } = Dimensions.get("screen");

const Buttons = () => {
  return (
    <View style={styles.petButton}>
      <Text style={styles.button}>Dog</Text>
      <Text style={styles.button}>Cat</Text>
      <Text style={styles.button}>Bird</Text>
    </View>
  );
};

const AddNewPet = ({ navigation }) => {
  const [state, setState] = useState({
    petName: "",
    petBreed: "",
    petAge: "",
    petWeight: "",
  });

  const handleChangeText = (input, value) => {
    setState({ ...state, [input]: value });
  };

  const popUp = () => {
    Alert.alert("Pet Tracker App", "Pet added to your pet list!", [
      {
        text: "OK",
        onPress: () => navigation.navigate("PetsProfile_user"),
      },
    ]);
  };

  //database
  const addNew = async () => {
    //Validacion
    if (state.petName === "") {
      Alert.alert("Pet Tracker App", "Please, provide your pet name", [
        {
          text: "OK",
        },
      ]);
    } else {
      console.log(state);
      await firebase.db.collection("pets").add({
        petName: state.petName,
        petBreed: state.petBreed,
        petAge: state.petAge,
        petWeight: state.petWeight,
      });
      popUp();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.textTitle}>🐾 Add new pet 🐾</Text>
        <Text style={styles.text}>My pet breed is a: </Text>
        <Buttons />
        <Text style={styles.text}>My pet information: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChangeText("petName", value)}
          placeholder="Pet name"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChangeText("petBreed", value)}
          placeholder="Breed"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChangeText("petAge", value)}
          placeholder="Age"
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChangeText("petWeight", value)}
          placeholder="Weight (kg.)"
          keyboardType="decimal-pad"
        />
        <TouchableOpacity
          onPress={() => {
            addNew();
          }}
          style={styles.buttonAdd}
        >
          <Text>Add pet 🐾</Text>
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
  },
  textTitle: {
    textAlign: "center",
    fontSize: 35,
    color: theme.colors.dark,
    fontWeight: "bold",
    margin: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: theme.colors.dark,
    fontWeight: "300",
    margin: 20,
  },
  input: {
    width: width - 100,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 15,
    marginBottom: 15,
    borderColor: theme.colors.gray,
  },
  buttonAdd: {
    width: 200,
    height: 50,
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 5,
    elevation: 15,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  petButton: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: theme.colors.darkBlue,
    elevation: 15,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default AddNewPet;
