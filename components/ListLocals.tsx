import { BasicLocal } from "@/app/types/users";
import { Text, View } from "./Themed";
import { Image, Modal, Pressable, ScrollView, StyleSheet } from "react-native";
import { useColorScheme } from "@/components/useColorScheme";
import LocalInteraction from "./LocalInteraction";
import { useState } from "react";

export default function ListLocals({
  listLocals,
}: {
  listLocals: BasicLocal[];
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocal, setSelectedLocal] = useState(0);
  const onPress = (id: number) => {
    console.log("onPress", id);
    setSelectedLocal(id);
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      overScrollMode="never"
    >
      {(listLocals &&
        listLocals.map((local) => (
          <Pressable
            key={local.id}
            style={styles.local}
            onPress={() => onPress(local.id)}
          >
            <Image style={styles.localImage} source={{uri: local.image}} />
            <View style={styles.info}>
              <Text style={styles.name} numberOfLines={1}>
                {local.name}
              </Text>
              <Text style={styles.description} numberOfLines={5}>
                {local.description}
              </Text>
            </View>
          </Pressable>
        ))) || <Text>Loading locals in your area</Text>}

      <Modal
        animationType="none"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Local Details</Text>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>X</Text>
          </Pressable>
        </View>
        <LocalInteraction id={selectedLocal} />
      </Modal>
    </ScrollView>
  );
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
