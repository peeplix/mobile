import { BasicUser } from "@/app/types/users";
import { Text, View } from "@/components/Themed";
import { Image, Pressable, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import UserDetails from "@/components/UserDetails";
import { Link } from "expo-router";

export default function ListUsers({ listUsers }: { listUsers: BasicUser[] }) {
  const [id, setId] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const onPress = (id: any) => {
    console.log("Pressing", id);
    setId(id);
    setShowModal(true);
  };

  if (listUsers && !showModal) {
    return (
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        overScrollMode="never"
      >
        {listUsers.map((user, index) => (
          <Pressable
            key={index}
            style={styles.local}
            onPress={() => onPress(user.id)}
          >
            <Image style={styles.localImage} source={{ uri: user.image }} />
            <View style={styles.info}>
              <Text style={styles.name} numberOfLines={1}>
                {user.name}
              </Text>
              <Text style={styles.description} numberOfLines={5}>
                {user.description}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    );
  } else if (showModal) {
    return <UserDetails options={{ id, setShowModal, showModal }} />;
  } else {
    return <Text>Loading locals</Text>;
  }
}

const styles = StyleSheet.create({
  scrollViewContent: {},
  local: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10,
  },
  localImage: {
    width: 100,
    height: 100,
    backgroundColor: "gray",
    marginRight: 10,
  },
  info: {
    flex: 1,
    height: 100,
    overflow: "hidden",
    flexShrink: 1,
    flexGrow: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
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
});
