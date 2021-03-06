import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import theme from "../../theme";
import firebase from "../../firebase";
import { Context as AuthContext } from "../../providers/AuthContext";

const { width, height } = Dimensions.get("screen");

const PetInfo = ({ navigation, route }) => {
  const { state } = useContext(AuthContext);
  const initialState = {
    id: "",
    petName: "",
    petBreed: "",
    petAge: "",
    petWeight: "",
    petOwner: "",
  };
  const petId = route.params.petId;
  const [pet, setPet] = useState();
  const [loading, setLoading] = useState(true);

  const getPetById = async (id) => {
    const dbRef = firebase.db.collection("pets").doc(id);
    const petData = await dbRef.get();
    const pet = petData.data();
    setPet({
      ...pet,
      id: petData,
    });
    setLoading(false);
  };

  useEffect(() => {
    getPetById(petId);
  }, []);

  const handleChangeText = (input, value) => {
    setPet({ ...pet, [input]: value });
  };

  const deletePet = async () => {
    const dbRef = firebase.db.collection("pets").doc(petId);
    await dbRef.delete();
  };

  const popUpDelete = () => {
    Alert.alert(
      "Pet Tracker App",
      "Are you sure you want to permanently remove this pet?",
      [
        {
          text: "Ok",
          onPress: () => {
            deletePet(), navigation.navigate("PetsProfile");
          },
        },
        {
          text: "Cancel",
          onPress: () => {
            navigation.navigate("PetsProfile");
          },
        },
      ]
    );
  };

  const updatePet = async () => {
    const dbRef = firebase.db.collection("pets").doc(petId);
    await dbRef.set({
      petName: pet.petName,
      petBreed: pet.petBreed,
      petAge: pet.petAge,
      petWeight: pet.petWeight,
      petOwner: state.user.id,
    });
    setPet(initialState);
    navigation.navigate("PetsProfile");
  };

  const popUpUpdate = () => {
    Alert.alert("Pet Tracker App", "Your pet profile has been updated!", [
      {
        text: "Ok",
        onPress: () => {
          updatePet(), navigation.navigate("PetsProfile");
        },
      },
    ]);
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.textTitle}>???? My pet information ????</Text>
          <TextInput
            style={styles.input}
            value={pet.petName}
            onChangeText={(value) => handleChangeText("petName", value)}
            placeholder="Pet name"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            value={pet.petBreed}
            onChangeText={(value) => handleChangeText("petBreed", value)}
            placeholder="Breed"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            value={`${pet.petAge}`}
            onChangeText={(value) => handleChangeText("petAge", value)}
            placeholder="Age"
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            value={`${pet.petWeight}`}
            onChangeText={(value) => handleChangeText("petWeight", value)}
            placeholder="Weight"
            keyboardType="decimal-pad"
          />
          <TouchableOpacity
            onPress={() => {
              popUpUpdate();
            }}
            style={styles.buttonAdd}
          >
            <Text>Update pet ????</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              popUpDelete();
            }}
            style={styles.buttonAdd}
          >
            <Text>Delete pet ????</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
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

export default PetInfo;
