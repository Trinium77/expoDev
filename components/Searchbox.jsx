import { useState } from "react";

import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Searchbox = ({ onPressButton }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.row}>
      <TextInput autoFocus={true} style={styles.input} onChangeText={setText} value={text} />
      <Ionicons name={"search"} size={30} onPress={onPressButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  text: { color: "black", fontSize: 30 },
  input: { flex: 1, borderWidth: 2, padding: 5, marginRight: 15 },
});

export default Searchbox;
