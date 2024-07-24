import { StyleSheet, Text } from "react-native";

import { View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { User } from "../types/users";
import * as SecureStore from "expo-secure-store";
import Profile from "@/components/Profile";

export default function TabTwoScreen() {
  const [userInfo, setUserInfo] = useState({} as User);

  async function save(key: any, value: any) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getValueFor(key: any) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return result;
    } else {
      return undefined;
    }
  }

  useEffect(() => {
    const id = getValueFor("token");
    const fetchUserInfo = async () => {
      /* const response = await fetch(`http://localhost:3000/user/${id}`);
      const data = await response.json(); */
      const data = {
        id: 1,
        name: "Jean Fourest",
        image: "https://picsum.photos/200/300",
        description: "Reste loin de moi, je suis un local",
        address: "123 rue du local",
        city: "Localville",
        country: "Localand",
        email: "localMail",
        phone: "1234567890",
      } as User;
      setUserInfo(data);
    };

    fetchUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Profile user={userInfo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
