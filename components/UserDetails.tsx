import { User } from "@/app/types/users";
import React, { useEffect, useState } from "react";
import { Modal, Pressable, useColorScheme } from "react-native";
import { Text, View } from "@/components/Themed";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { Image, StyleSheet } from "react-native";

export default function UserDetails({
  options: { id, setShowModal, showModal },
}: {
  options: {
    id?: number;
    setShowModal?: any;
    showModal?: boolean;
  };
}) {
  const [data, setData] = useState({} as User);
  const color = useColorScheme();
  console.log(color);

  useEffect(() => {
    console.log("UserDetails", id);
    setData({
      id: 1,
      name: "Jean Fourest",
      image: "https://picsum.photos/200/300",
      description: "Reste loin de moi, je suis un local !",
      address: "123 rue du local",
      city: "Localville",
      country: "Localand",
      email: "localMail",
      phone: "1234567890",
    });
  }, [id]);

  return data ? (
    <Modal
      visible={showModal}
      onRequestClose={() => setShowModal(false)}
      animationType="slide"
    >
      <View style={styles.modalHeader}>
        <Text style={styles.modalTitle}>User Details</Text>
        <Pressable
          style={styles.closeButton}
          onPress={() => setShowModal(false)}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </Pressable>
      </View>
      <View
        style={{
          ...styles.separator,
          backgroundColor:
            color === "dark"
              ? DarkTheme.colors.border
              : DefaultTheme.colors.border,
        }}
      ></View>
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
    </Modal>
  ) : (
    <Text>Loading user</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
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
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  modalTitle: {
    fontSize: 20,
    marginLeft: 5,
  },
  closeButton: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 20,
  },
  closeButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "rgb(216, 216, 216)",
  },
});
