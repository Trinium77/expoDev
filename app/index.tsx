import { useState } from "react";
import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { movies } from "@/scripts/movies";

const styles = StyleSheet.create({
  view1: { flex: 1, backgroundColor: "red", justifyContent: "center", alignItems: "center" },
  view2: { flex: 1, backgroundColor: "green", justifyContent: "center", alignItems: "center" },
  view3: { flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" },
  view4: { flex: 1, backgroundColor: "blue" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  text: { color: "black", fontSize: 30 },
});

export default function Index() {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState("");

  const view4 = "Texte de la View 4";

  const onPressButton = () => {
    setDisplay(`Vous avez saisi: ${text}`);
  };

  const renderItem = ({ item }) => {
    return (
      <>
        <Text>Titre: {item.title}</Text>
        <Text>Résumé: {item.overview}</Text>
      </>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={styles.row}>
        <TextInput
          autoFocus={true}
          style={{ flex: 1, borderWidth: 2, padding: 5, marginRight: 15 }}
          onChangeText={setText}
          value={text}
        />
        <Ionicons name={"search"} size={30} onPress={onPressButton} />
      </View>
      <View
        style={{
          flex: 5,
        }}>
        <View style={styles.view3}>
          <Text style={styles.text}>{display}</Text>
        </View>
      </View>
    </View>
  );
}
