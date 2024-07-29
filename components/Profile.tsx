import { User } from "@/app/types/users";
import React, { useEffect, useState } from "react";
import { Text, View } from "@/components/Themed";
import { Image, StyleSheet } from "react-native";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export default function Profile({
  options: { user },
}: {
  options: {
    user?: User;
  };
}) {
  const [data, setData] = useState({} as User);

  useEffect(() => {
    if (user) {
      console.log("profile", user);
      setData({
        id: 1,
        name: "Jean Fourest profile lmao",
        image: "https://picsum.photos/200/300",
        description: "Reste loin de moi, je suis un local !",
        address: "123 rue du local",
        city: "Localville",
        country: "Localand",
        email: "localMail",
        phone: "1234567890",
      });
    }
  }, [user]);

  return data ? (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.text}>Name: {data.name}</Text>
        <Text style={styles.text}>Address: {data.address}</Text>
        <Text style={styles.text}>City: {data.city}</Text>
        <Text style={styles.text}>Country: {data.country}</Text>
        <Text style={styles.text}>Phone: {data.phone}</Text>
        <Text style={styles.text}>Email: {data.email}</Text>
        <Text style={styles.text}>Description: {data.description}</Text>
      </View>
    </View>
  ) : (
    <Text>Loading Profile</Text>
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
    fontSize: 18,
  },
});
