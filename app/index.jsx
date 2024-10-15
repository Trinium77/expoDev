import { useState, useEffect } from "react"; 
import { View, StyleSheet, VirtualizedList, Pressable } from "react-native";
import { Link } from "expo-router";

import ListItem from "@/components/ListItem";
import EmptyList from "@/components/EmptyList";
import HeaderFooter from "@/components/HeaderFooter";
import Searchbox from "@/components/Searchbox";
import { token, url } from "@/scripts/tools";

const config = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export default function Index() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getMovies = async (page) => {
    try {
      const response = await fetch(url + `&page=${page}`, config);
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    (async () => {
      const m = await getMovies(page);
      setMovieList(m.results);
      setFilteredMovies(m.results);
      setLoading(false);
    })();
  }, []);

  
  const onPressButton = () => {
    const filtered = movieList.filter((movie) =>
      movie.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const renderItem = ({ item }) => (
    <Link href={{ pathname: "/[id]", params: { id: item.id } }} asChild>
      <Pressable>
        <ListItem item={item} />
      </Pressable>
    </Link>
  );

  const getItem = (_data, index) => _data.at(index);

  const getItemCount = (_data) => _data.length;

  const onEndReached = async () => {
    setLoading(true);
    const m = await getMovies(page + 1);
    setMovieList((oldMovies) => [...oldMovies, ...m.results]);
    setFilteredMovies((oldMovies) => [...oldMovies, ...m.results]);
    setLoading(false);
    setPage((page) => page + 1);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Searchbox setText={setText} onPressButton={onPressButton} />
      <View style={{ flex: 5 }}>
        <VirtualizedList
          data={filteredMovies}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 3 }} />}
          ListFooterComponent={HeaderFooter}
          ListHeaderComponent={HeaderFooter}
          ListEmptyComponent={EmptyList}
          keyExtractor={(item, index) => index}
          refreshing={loading}
          onEndReached={onEndReached}
          getItem={getItem}
          getItemCount={getItemCount}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
