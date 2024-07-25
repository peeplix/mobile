import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function DeleteAccount({ token }: { token: string }) {
  const deleteAccount = async () => {
    console.log("Delete Account", token);

    /* const response = await fetch("http://localhost:3000/user/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log(data); */
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={() => deleteAccount()} style={styles.deleteButton}>
        <Text style={styles.text}>Delete Account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});
