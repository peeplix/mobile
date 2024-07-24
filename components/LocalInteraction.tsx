import React, { useEffect, useState } from "react";
import { Text, View } from "./Themed";
import { Image, StyleSheet } from "react-native";
import { Local } from "@/app/types/users";

export default function LocalInteraction({ id }: { id: number }) {
  const [local, setLocal] = useState({} as Local);

  useEffect(() => {
    console.log("LocalInteraction", id);

    async function fetchLocal() {
      /* const response = await fetch(`http://localhost:3000/locals/${id}`);
      const data = await response.json(); */

      const data = {
        id: 1,
        name: "Jean Fourest",
        image: "https://picsum.photos/200/300",
        description: "Reste loin de moi, je suis un local !",
      } as Local;
      setLocal(data);
    }

    fetchLocal();
  }, [id]);

  return local ? (
    <View style={styles.container}>
      <Image style={styles.localImage} source={{ uri: local.image }} />
      <View style={styles.bar}></View>
      <View style={styles.info}>
        <Text style={styles.name}>{local.name}</Text>
        <Text>{local.description}</Text>
      </View>
    </View>
  ) : (
    <Text>Loading local details</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  localImage: {
    width: "100%",
    height: "40%",
  },
  bar: {
    width: "100%",
    height: 1,
    backgroundColor: "white",
    marginVertical: 10,
  },
  info: {
    width: "100%",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
