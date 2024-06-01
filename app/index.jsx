import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-red-700">
      <Text className="text-4xl">Index.js</Text>
      <StatusBar style="auto" />
    </View>
  );
}
