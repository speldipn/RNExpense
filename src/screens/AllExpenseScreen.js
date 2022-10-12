import { StyleSheet, Text, View } from "react-native";

function AllExpenseScreen() {
  return (
    <View style={styles.container}>
      <Text>AllExpenseScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#41a490",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AllExpenseScreen;
