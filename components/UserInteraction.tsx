import React, { useEffect, useState } from "react";
import { Text, View } from "./Themed";
import { Image, StyleSheet } from "react-native";
import { User } from "@/app/types/users";

export default function UserInteraction({ id }: { id: number }) {
  const [user, setUser] = useState({} as User);

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
      } as User;
      setUser(data);
    }

    fetchLocal();
  }, [id]);

  return user ? (
    <View style={styles.container}>
      <Image style={styles.localImage} source={{ uri: user.image }} />
      <View style={styles.bar}></View>
      <View style={styles.info}>
        <Text style={styles.name}>{user.name}</Text>
        <Text>{user.description}</Text>
      </View>
    </View>
  ) : (
    <Text>Loading user details</Text>
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
