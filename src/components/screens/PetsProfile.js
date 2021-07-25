import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Text, Dimensions, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");

export const PetsProfile_newUser = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <TouchableOpacity
                onPress={() => {navigation.navigate("AddNewPet")}}
                style={styles.buttonAdd}
            >
                <Text style={styles.text}>Add new pet</Text>
            </TouchableOpacity>
            {/* AQUI VA LA IMAGEN */}
            </View>
        </SafeAreaView>
    );
};

export const PetsProfile_user = ({ navigation }) => {
    return(
        <SafeAreaView>
            <Text>Pets profiles</Text>
        </SafeAreaView>
    );
};

const styles =StyleSheet.create({
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