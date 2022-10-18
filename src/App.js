import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigators";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1abc9c" },
});
