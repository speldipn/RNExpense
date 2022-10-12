import { Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentlyScreen from "../screens/RecentlyScreen";
import AllExpenseScreen from "../screens/AllExpenseScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function MainNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="recently"
      screenOptions={{
        tabBarActiveTintColor: "#ffffff",
        tabBarStyle: { backgroundColor: "#1abc9c" },
        headerStyle: { backgroundColor: "#1abc9c" },
        headerTitleStyle: { color: "#ffffff" },
        headerRight: () => (
          <Pressable
            hitSlop={10}
            onPress={() => console.log("add pressed")}
            style={{ marginEnd: 12 }}
          >
            <Ionicons name="add-outline" size={24} color="white" />
          </Pressable>
        ),
      }}
    >
      <Tab.Screen
        name="Recent"
        component={RecentlyScreen}
        options={{
          tabBarLabel: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="All Expenses"
        component={AllExpenseScreen}
        options={{
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigation;
