import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Modal, Dimensions, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");

const PetInfo = ({ navigation }) => {
    return(
        <SafeAreaView>
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

export default PetInfo;