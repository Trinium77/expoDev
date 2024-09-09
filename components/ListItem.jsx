import { Text, View, StyleSheet, Image } from "react-native";

const ListItem = ({ item }) => {
  const image = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`;
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        // resizeMode="center"
        // resizeMethod="resize"
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.details}>
          {item.release_date} - langue: {item.original_language}
        </Text>
        <View style={styles.ratingContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Text key={index} style={styles.star}>
              {index < Math.floor(item.rating) ? "★" : "☆"}
            </Text>
          ))}
        </View>
        {/* <Text style={styles.sports}>{item.sports.join(' | ')}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Se désolidariser</Text>
          </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fbfbfb",
    borderWidth: 1,
    borderColor: "#DCDCDC",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#888",
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  star: {
    fontSize: 16,
    color: "#FFD700",
  },
  sports: {
    fontSize: 14,
    color: "#888",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2ECC71",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#2ECC71",
    fontSize: 16,
  },
});
