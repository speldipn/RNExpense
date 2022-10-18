import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

function RecentlyScreen() {
  return (
    <View style={styles.container}>
      <Text>RecentlyScreen</Text>
      <ActivityIndicator style={styles.loading} size="large" color="#ff000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1abc9c",
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default RecentlyScreen;
