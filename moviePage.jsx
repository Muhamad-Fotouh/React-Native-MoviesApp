import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Linking } from "react-native";

export default function MoviePage({ route }) {
  const { movie } = route.params;
  const youtubeLink = `https://www.youtube.com/results?search_query=${movie.title} trailer`;

  const openYoutube = () => {
    try {
      Linking.openURL(youtubeLink);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
      <TouchableOpacity onPress={openYoutube} style={styles.btn}>
        <Text style={{ color: "white" }}>Watch Trailer on YouTube</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: "contain",
    marginVertical: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  overview: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 16,
  },
  btn: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
