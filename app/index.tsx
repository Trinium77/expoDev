import { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItem from "@/components/ListItem";
import EmptyList from "@/components/EmptyList";
import HeaderFooter from "@/components/HeaderFooter";
import Searchbox from "@/components/Searchbox";

import { movies } from "@/scripts/movies";

export default function Index() {
  const [text, setText] = useState("");

  const onPressButton = () => {};

  const renderItem = ({ item }) => <ListItem item={item} />;

  const renderSeparator = () => <View style={{ marginVertical: 3 }} />;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}>
      <Searchbox onPressButton={onPressButton} />
      <View
        style={{
          flex: 5,
        }}>
        <FlatList
          data={movies.results}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={HeaderFooter}
          ListHeaderComponent={HeaderFooter}
          ListEmptyComponent={EmptyList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
