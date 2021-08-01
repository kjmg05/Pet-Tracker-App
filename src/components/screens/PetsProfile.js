import React, { useState, useEffect,useContext } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import theme from "../../theme";
import firebase from "../../firebase";
import { Context as AuthContext } from "../../providers/AuthContext";
import { Button } from "react-native-paper";

const { width, height } = Dimensions.get("screen");

export const PetsProfile_newUser = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddNewPet");
          }}
          style={styles.buttonAdd}
        >
          <Text style={styles.text}>Add new pet 🐾</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Aqui va la imagen</Text>
      </View>

      
    </SafeAreaView>
  );
};

export const PetsProfile_user = ({ navigation }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { signout } = useContext(AuthContext);
  useEffect(() => {
    firebase.db.collection("pets").onSnapshot((querySnapshot) => {
      const pets = [];
      querySnapshot.docs.forEach((doc) => {
        const { petName, petBreed, petAge, petWeight } = doc.data();
        pets.push({
          id: doc.id,
          petName,
          petBreed,
          petAge,
          petWeight,
        });
      });
      // console.log(pets);
      setPets(pets);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <View style={styles.body}>
        <ScrollView>
        <Button onPress={signout}>Signout</Button>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddNewPet");
            }}
            style={styles.buttonAdd}
          >
            <Text style={styles.text}>Add new pet 🐾</Text>
          </TouchableOpacity>
          {pets.map((pet) => {
            return (
              <ListItem
                key={pet.id}
                bottomDivider
                onPress={() => {
                  navigation.navigate("PetInfo", {
                    petId: pet.id,
                  });
                }}
              >
                <Avatar
                  source={{
                    uri: "https://raw.githubusercontent.com/kjmg05/Pet-Tracker-App/keniaBranch/assets/img/pets.png",
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title>{pet.petName}</ListItem.Title>
                  <ListItem.Subtitle>Breed: {pet.petBreed}</ListItem.Subtitle>
                  <ListItem.Subtitle>Age: {pet.petAge}</ListItem.Subtitle>
                  <ListItem.Subtitle>
                    Weight (kg.): {pet.petWeight}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            );
          })}
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate("PetInfo");
            }}
            style={styles.buttonAdd}
          >
            {}
          </TouchableOpacity> */}
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {},
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: theme.colors.dark,
    fontWeight: "300",
  },
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
