import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import theme from "../../theme";
import firebase from "../database/firebase";

const { width, height } = Dimensions.get("screen");

const PetInfo = ({ navigation, route}) => {
  const petId = route.params.petId;
  const [pet, setPet] = useState({
    id: '',
    petName: '',
    petBreed: '',
    petAge: '',
    petWeight: '',
  });

  const [loading, setLoading] = useState(true);

  // console.log(petId);

  

  const getPetById = async (id) => {
    const dbRef = firebase.db.collection('pets').doc(id);
    const petData = await dbRef.get();
    const pet = petData.data();
    // console.log(pet);
    setPet({
      ...pet,
      id: petData,
    });
    setLoading(false);
  };

  useEffect(() => {
    getPetById(petId);
  });

  const handleChangeText = (input, value) => {
    setState({...state, [input]: value})
  }

  const popUp = () => {
    Alert.alert("Pet Tracker App", "Pet added to your pet list!", [
      {
        text: "OK",
        onPress: () => 
          navigation.navigate("PetsProfile_user"),
            // onChangeAge(""),
            // onChangeText(""),
            // onChangeWeight("");
      },
    ]);
  };

  //database
  const addNew = () => {
    
      Alert.alert("Pet Tracker App", "Please, provide your pet name", [
        {
          text: "OK",
        },
      ]);
    
      popUp();
    
  };

  if(loading){
    return(
      <View>
<ActivityIndicator size="large" color="#0000ff" />
    </View>
    );
  }
  else{
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.textTitle}>🐾 My pet information 🐾</Text>
          <TextInput
            style={styles.input}
            value={pet.petName}
            onChangeText={(value) => handleChangeText('petName', value)}
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            value={pet.petBreed}
            onChangeText={(value) => handleChangeText('petBreed', value)}
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            value={`${pet.petAge} years`}
            onChangeText={(value) => handleChangeText('petAge', value)}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            value={`${pet.petWeight} kg`}
            onChangeText={(value) => handleChangeText('petWeight', value)}
            keyboardType="decimal-pad"
          />
          <TouchableOpacity
            onPress={() => {
              
            }}
            style={styles.buttonAdd}
          >
            <Text>Update pet 🐾</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              
            }}
            style={styles.buttonAdd}
          >
            <Text>Delete pet 🐾</Text>
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
