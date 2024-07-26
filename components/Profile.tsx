import { User } from "@/app/types/users";
import React, { useEffect } from "react";
import { Text, View } from "./Themed";
import { Image, StyleSheet } from "react-native";

export default function Profile({ user }: { user: User }) {
  useEffect(() => {
    console.log(user);
  }, [user]);

  return user ? (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: user.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.text}>Name: {user.name}</Text>
          <Text style={styles.text}>Address: {user.address}</Text>
          <Text style={styles.text}>City: {user.city}</Text>
          <Text style={styles.text}>Country: {user.country}</Text>
          <Text style={styles.text}>Phone: {user.phone}</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
          <Text style={styles.text}>Description: {user.description}</Text>
        </View>
      </View>
    </View>
  ) : (
    <Text>Loading user profile</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  info: {
    height: "auto",
  },
  text: {
    fontSize: 18
  },
});
