import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const LocalTuristico = ({ name, address, description, imageSource }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 30,
  },
  address: {
    fontSize: 25,
    color: "#add8e6",
  },
  image: {
    width: 500,
    height: 500,
  },
  description: {
    fontSize: 20,
    color: "#a9a9a9",
    textAlign: "justify",
  },
});

export default LocalTuristico;
