import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Modal, Dimensions, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");

const PetInfo = ({ navigation }) => {
    return(
        <SafeAreaView>
            <Text>Pet info</Text>
        </SafeAreaView>
    );

};

export default PetInfo;