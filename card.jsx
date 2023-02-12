import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function ImgCard(props) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image
          style={styles.cardImage}
          source={{
            uri: props.imgLink,
          }}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{props.mvName}</Text>
        <Text style={styles.cardDescription}>
          {props.mvName} is a popular movie with great reviews and high ratings.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: 300,
    height: 400,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImageContainer: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardContent: {
    padding: 10,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
});
