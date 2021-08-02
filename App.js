import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./src/theme";
import Navigation from "./src/components/navigation";
import { Provider as AuthProvider } from "./src/providers/AuthContext";
import LongTimers from "./src/utils/LongTimer";

export default function App() {
  LongTimers();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.nav} />
      <AuthProvider>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </AuthProvider>
    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    backgroundColor: theme.colors.dark,
  },
});
