import { StyleSheet, Text, View } from "react-native";

function RecentlyScreen() {
  return (
    <View style={styles.container}>
      <Text>RecentlyScreen</Text>
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

export default RecentlyScreen;
