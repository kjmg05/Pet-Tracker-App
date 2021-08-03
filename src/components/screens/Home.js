import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Modal,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5162a5247b9aaba41d97ad6e7d3fcea7caab7289
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <MaterialIcons
          style={styles.infoIcon}
          name="info"
          size={24}
          onPress={() => setModalOpen(true)}
          color="#fff"
        />
        <Image
          style={styles.logo}
          source={{
            uri: "https://raw.githubusercontent.com/kjmg05/Pet-Tracker-App/devBranch/assets/img/petTracker.png",
          }}
        />
        <Modal visible={modalOpen}>
          <SafeAreaView style={styles.modal}>
            <MaterialIcons
              style={styles.closeIcon}
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
            />
            <View>
              <Text style={styles.modalTitle}>Pet Tracker App</Text>
              <Text style={styles.modalText}>
                Is a pet health tracking app designed to help pet owners take
                the best care of their furry friend. Simply upload data of a pet
                as the breed, pet's weight, feeding schedule, and exercise
                activities and the app will provide a dashboard to track and
                display. We'll also help owner's go paperless to organize a
                pet's records. Pet Tracker App is the perfect tool for pet
                owner's to organize and track their pet's info all in one app.
              </Text>
              <Text style={styles.modalFooter}>DESING AND DEVELOP BY</Text>
              <Text style={styles.modalFooterText}>
                DANIEL ARIAS AND KENIA MARTINEZ ⓒ 2021
              </Text>
            </View>
          </SafeAreaView>
        </Modal>
<<<<<<< HEAD
=======
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
=======
>>>>>>> 5162a5247b9aaba41d97ad6e7d3fcea7caab7289

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signin");
          }}
          style={styles.buttonLogin}
        >
          <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
          style={styles.buttonSignin}
        >
          <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
<<<<<<< HEAD
}
>>>>>>> 466bf6f083f84ac5e6a868b9bddf09c3046d7406

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signin");
          }}
          style={styles.buttonLogin}
        >
          <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
          style={styles.buttonSignin}
        >
          <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>

        
      </View>
    </SafeAreaView>
  );
};

=======
};

>>>>>>> 5162a5247b9aaba41d97ad6e7d3fcea7caab7289
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 350,
    height: 350,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: theme.colors.dark,
  },
  infoIcon: {
    marginTop: 30,
    marginLeft: 350,
    color: theme.colors.lightBlue,
    fontSize: 38,
  },
  closeIcon: {
    marginLeft: 350,
    marginTop: 20,
    color: theme.colors.dark,
    fontSize: 38,
  },
  modal: {
    flex: 1,
    backgroundColor: theme.colors.lightBlue,
    width: width,
    height: height,
  },
  modalTitle: {
    margin: 10,
    textAlign: "center",
    color: theme.colors.dark,
    fontSize: 38,
  },
  modalText: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "justify",
    color: theme.colors.dark,
    fontSize: 18,
  },
  modalFooter: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
    color: theme.colors.dark,
    fontSize: 18,
  },
  modalFooterText: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
    color: theme.colors.dark,
    fontSize: 18,
  },
  buttonLogin: {
    width: 300,
    height: 50,
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 5,
    elevation: 15,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSignin: {
    width: 300,
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: theme.colors.darkBlue,
<<<<<<< HEAD
    backgroundColor: theme.colors.darkBlue,
=======
>>>>>>> 5162a5247b9aaba41d97ad6e7d3fcea7caab7289
    elevation: 15,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
