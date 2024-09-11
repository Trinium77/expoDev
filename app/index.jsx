import { useState } from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import { Link } from "expo-router";

import ListItem from "@/components/ListItem";
import EmptyList from "@/components/EmptyList";
import HeaderFooter from "@/components/HeaderFooter";
import Searchbox from "@/components/Searchbox";

import { movies } from "@/scripts/movies";

export default function Index() {
  const [text, setText] = useState("");

  const onPressButton = () => {};

  const renderItem = ({ item }) => (
    <Link href={{ pathname: "/[id]", params: { id: item.id } }} asChild>
      <Pressable>
        <ListItem item={item} />
      </Pressable>
    </Link>
  );

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
