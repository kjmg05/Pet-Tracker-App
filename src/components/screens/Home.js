import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Modal,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <MaterialIcons
            style={styles.infoIcon}
            name="info"
            size={24}
            onPress={() => setModalOpen(true)}
            color="#fff"
          />
          {/* Aqui va la imagen de la app */}
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
                  Is a pet tracking app designed to help pet owners take
                  the best care of their furry friend. Simply upload data of a
                  pet as its name, the breed, pet's weight and pet's age, and the app will provide a dashboard to track and
                  display. We'll also help owner's go paperless to organize a
                  pet's records. Pet Tracker App is the perfect tool for pet
                  owner's to organize and track their pet's info all in one app. {"\n"} {"\n"}
                  Here is some important information: {"\n"} {"\n"}
                  Most common pets are dogs, cats and birds, but you can also register any kind of pet you have. {"\n"} {"\n"}
                  Your pet age can be in years or months. {"\n"} {"\n"}
                  Your pet age has to be in kilograms. {"\n"} {"\n"}
                </Text>
                <Text style={styles.modalFooter}>DESING AND DEVELOP BY</Text>
                <Text style={styles.modalFooterText}>
                  DANIEL ARIAS AND KENIA MARTINEZ ⓒ 2021
                </Text>
              </View>
            </SafeAreaView>
          </Modal>

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
      </ScrollView>
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
    marginBottom: 50,
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
    elevation: 15,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
