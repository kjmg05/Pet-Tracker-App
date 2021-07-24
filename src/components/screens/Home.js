import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Modal, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");

const Home = () => {
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
                  Is a pet health tracking app designed to help pet owners take the best care of their furry friend. 
                  Simply upload data of a pet as the breed, pet's weight, feeding schedule, and exercise activities and 
                  the app will provide a dashboard to track and display. We'll also help owner's go paperless to organize a pet's records. 
                  Pet Tracker App is the perfect tool for pet owner's to organize and track their pet's info all in one app.
                </Text>
                <Text style={styles.modalFooter}>DESING AND DEVELOP BY</Text>
                <Text style={styles.modalFooterText}>
                  DANIEL ARIAS AND KENIA MARTINEZ ⓒ 2021
                </Text>
              </View>
              </SafeAreaView>
            </Modal>


          </View>
        </ScrollView>

      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
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
});

export default Home;