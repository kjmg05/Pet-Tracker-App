import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Modal, Dimensions, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");

export const PetsProfile_newUser = ({navigation}) => {
    return(
        <SafeAreaView>
            <Text>Pets profiles new user</Text>
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