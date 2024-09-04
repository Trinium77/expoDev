import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "red",
          }}>
          <Text>View 1</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "green",
          }}>
          <Text>View 2</Text>
        </View>
      </View>
      <View
        style={{
          flex: 5,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "yellow",
          }}>
          <Text>View 3</Text>
        </View>
        <View
          style={{
            flex: 4,
            backgroundColor: "maroon",
          }}>
          <Text>View 4</Text>
        </View>
      </View>
    </View>
  );
}
