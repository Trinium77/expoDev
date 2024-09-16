import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { movies } from "@/scripts/movies";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movies.results.find((movie) => movie.id === parseInt(id));
    setMovie(selectedMovie);
  }, [id]);

  if (!movie) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      />
      <Text style={styles.description}>{movie.overview}</Text>
      <Text style={styles.details}>Release Date: {movie.release_date}</Text>
      <Text style={styles.details}>Vote Average: {movie.vote_average}</Text>
      <Text style={styles.details}>Vote Count: {movie.vote_count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  poster: {
    width: "auto",
    height: 450,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    color: "gray",
  },
});
