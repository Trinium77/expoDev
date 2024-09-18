import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { token } from "@/scripts/tools";

const config = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState(null);

  const getMovieDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=fr-FR`,
        config,
      );
      return await response.json();
    } catch (e) {}
  };

  useEffect(() => {
    (async () => {
      const m = await getMovieDetail();

      setMovieDetail(m);
      setLoading(false);
    })();
  }, [id]);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator animating={loading} size={"large"} hidesWhenStopped={true} />}

      {movieDetail != null ? (
        <>
          <Text style={styles.title}>{movieDetail.title}</Text>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}` }}
            style={styles.poster}
          />
          <Text style={styles.description}>{movieDetail.overview}</Text>
          <Text style={styles.details}>Date de sorite: {movieDetail.release_date}</Text>
          <Text style={styles.details}>Moyenne des vote: {movieDetail.vote_average}</Text>
          <Text style={styles.details}>Nombre de vote: {movieDetail.vote_count}</Text>
        </>
      ) : null}
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
