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

const { width, height } = Dimensions.get("screen");

const Buttons = () => {
  return (
    <View style={styles.petButton}>
      <TouchableOpacity
        onPress={() => (backgroundColor = "#00ADB5")}
        style={styles.button}
      >
        <Text>Dog</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text>Cat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text>Bird</Text>
      </TouchableOpacity>
    </View>
  );
};

const AddNewPet = ({ navigation }) => {
  const [text, onChangeText] = useState(null);
  const [name, onChangeName] = useState(null);
  const [age, onChangeAge] = useState(null);
  const [weight, onChangeWeight] = useState(null);

  const popUp = () => {
    Alert.alert("Pet Tracker App", "Pet added to your pet list!", [
      {
        text: "OK",
        onPress: () => {
          navigation.navigate("PetsProfile_user"),
            onChangeAge(""),
            onChangeText(""),
            onChangeWeight("");
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.textTitle}>🐾 Add new pet 🐾</Text>
        <Text style={styles.text}>My pet is a: </Text>
        <Buttons />
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Pet name"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Breed"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="Age"
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeWeight}
          value={weight}
          placeholder="Weight (kg.)"
          keyboardType="decimal-pad"
        />
        <TouchableOpacity
          onPress={() => {
            popUp();
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
