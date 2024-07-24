import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { BasicLocal } from "../types/users";
import ListLocals from "@/components/ListLocals";

export default function TabOneScreen() {
  const [listLocals, setListLocals] = useState([] as BasicLocal[]);

  useEffect(() => {
    async function fetchLocals() {
      /* const response = await fetch("http://localhost:3000/locals");
      const data = await response.json(); */
      const data = [
        {
          id: 1,
          name: "Jean Fourest",
          image: "https://picsum.photos/200/300",
          description: "Reste loin de moi, je suis un local",
        },
        {
          id: 2,
          name: "Local 2",
          image: "https://picsum.photos/200/300",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
        },
        {
          id: 3,
          name: "Local 3",
          image: "https://picsum.photos/200/300",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
        },
        {
          id: 4,
          name: "Local 4",
          image: "https://picsum.photos/200/300",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
        },
        {
          id: 5,
          name: "Local 5",
          image: "https://picsum.photos/200/300",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
        },
        {
          id: 6,
          name: "Local 6",
          image: "https://picsum.photos/200/300",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
        },
        {
          id: 7,
          name: "Local 7",
          image: "https://picsum.photos/200/300",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
        },
        {
          id: 8,
          name: "Local 8",
          image: "https://picsum.photos/200/300",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
        },
        {
          id: 9,
          name: "Local 9",
          image: "https://picsum.photos/200/300",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
        },
        {
          id: 10,
          name: "Local 10",
          image: "https://picsum.photos/200/300",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
        },
      ] as BasicLocal[];
      setListLocals(data);
    }

    fetchLocals();
  }, []);

  return (
    <View style={styles.container}>
      <ListLocals listLocals={listLocals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  title: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
  }
});
