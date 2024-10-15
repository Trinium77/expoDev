import { useState, useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView, Animated } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

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
  const navigation = useNavigation();
  
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const getMovieDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=fr-FR`,
        config
      );
      const movie = await response.json();
      return movie;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    (async () => {
      const movie = await getMovieDetail();
      setMovieDetail(movie);

      if (movie && movie.original_title) {
        navigation.setOptions({
          title: movie.original_title,
        });
      }

      setLoading(false);

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    })();
  }, [id]);

  return (
    <LinearGradient
      colors={['#141E30', '#243B55']}
      style={styles.gradientContainer}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {loading && (
            <ActivityIndicator
              animating={loading}
              size="large"
              color="#FFFFFF"
              style={styles.loader}
            />
          )}

          {movieDetail != null ? (
            <Animated.View style={{ ...styles.animatedContainer, opacity: fadeAnim }}>
              <Text style={styles.title}>{movieDetail.title}</Text>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}` }}
                style={styles.poster}
              />
              <Text style={styles.description}>{movieDetail.overview}</Text>
              
              <View style={styles.infoContainer}>
                <Text style={styles.details}>Release Date: {movieDetail.release_date}</Text>
                <Text style={styles.details}>Rating: {movieDetail.vote_average}/10</Text>
                <Text style={styles.details}>Votes: {movieDetail.vote_count}</Text>
              </View>
            </Animated.View>
          ) : null}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  loader: {
    marginTop: 20,
  },
  animatedContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginVertical: 10,
    letterSpacing: 0.5,
  },
  poster: {
    width: "100%",
    height: 400,
    borderRadius: 20,
    marginVertical: 20,
    resizeMode: "cover",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  description: {
    fontSize: 16,
    color: "#E0E0E0",
    textAlign: "justify",
    lineHeight: 22,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 15,
    borderRadius: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  details: {
    fontSize: 16,
    color: "#FFFFFF",
    marginVertical: 5,
  },
});
