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
        <Text>Date de sortie: {item.release_date}</Text>
        <Text>Est un film pour adulte: {item.adult ? "oui" : "non"}</Text>
        <Text>Résumé: {item.overview}</Text>
      </>
    );
  };

  const renderSeparator = () => <View style={{ borderWidth: 0.3, marginVertical: 5 }} />;

  const renderHeaderFooter = () => <View style={{ margin: 10 }} />;

  const renderEmptyComponent = () => (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>Liste vide</Text>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
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
        <FlatList
          data={movies.results}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={renderHeaderFooter()}
          ListHeaderComponent={renderHeaderFooter()}
          ListEmptyComponent={renderEmptyComponent()}
        />
      </View>
    </View>
  );
}
