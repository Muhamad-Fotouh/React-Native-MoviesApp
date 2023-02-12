import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImgCard from "./card";

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

export default function Movies({ navigation }) {
  const [movies, setMovies] = useState([]);
  getMovies(apiUrl);
  function getMovies(url) {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.results);
      });
  }

  return (
    <View style={styles.container}>
      <ScrollView Style={styles.scrollView}>
        {movies.map((e, i) => {
          return (
            <TouchableOpacity
              key={e.id}
              onPress={() => navigation.navigate("Movie Page", { movie: e })}
            >
              <ImgCard mvName={e.title} imgLink={imgPath + e.poster_path} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    width: "100%",
  },
});
