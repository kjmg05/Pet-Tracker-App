import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import theme from "../../theme";
import firebase from "../../firebase";
import { Context as AuthContext } from "../../providers/AuthContext";

const { width, height } = Dimensions.get("screen");

const PetsProfile = ({ navigation }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { signout } = useContext(AuthContext);
  const { state } = useContext(AuthContext);

  useEffect(() => {
    firebase.db.collection("pets").onSnapshot((querySnapshot) => {
      const pets = [];
      querySnapshot.docs.forEach((doc) => {
        const { petName, petBreed, petAge, petWeight, petOwner } = doc.data();
        pets.push({
          id: doc.id,
          petName,
          petBreed,
          petAge,
          petWeight,
          petOwner,
        });
      });
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddNewPet");
            }}
            style={styles.buttonAdd}
          >
            <Text style={styles.text}>Add new pet 🐾</Text>
          </TouchableOpacity>
          {pets.map((pet) => {
            if (pet.petOwner === state.user.id) {
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
            }
          })}
        </ScrollView>
        <TouchableOpacity onPress={signout} style={styles.buttonLogOut}>
          <Text style={styles.logOut}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    backgroundColor: theme.colors.backgroundWhite,
  },
  viewLogo: {
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
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
  buttonLogOut: {
    width: 120,
    height: 40,
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 55,
    elevation: 15,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
   

  },
  logOut: {
    textAlign: "center",
    fontSize: 20,
    color: theme.colors.dark,
   
  },
});

export default PetsProfile;
