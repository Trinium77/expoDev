import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Searchbox = ({ setText, onPressButton }) => {
  const [inputText, setInputText] = useState("");

  const handleTextChange = (text) => {
    setInputText(text);
    setText(text);
  };

  return (
    <View style={styles.row}>
      <TextInput
        autoFocus={true}
        style={styles.input}
        onChangeText={handleTextChange}
        value={inputText}
      />
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
  input: { flex: 1, borderWidth: 2, padding: 5, marginRight: 15 },
});

export default Searchbox;
