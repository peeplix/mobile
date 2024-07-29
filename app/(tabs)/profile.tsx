import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { User } from "../types/users";
import * as SecureStore from "expo-secure-store";
import DeleteAccount from "@/components/DeleteAccount";
import Profile from "@/components/Profile";

export default function profile() {
  const [userInfo, setUserInfo] = useState({} as User);
  const [token, setToken] = useState("");

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
    /* const fetchedToken = getValueFor("token");
    fetchedToken
      .then((value) => {
        if (value) {
          setToken(value);
        }
      })
      .catch((error) => {
        console.log(error);
      }); */
    setToken("token");

    const fetchUserInfo = async () => {
      /* const response = await fetch(`http://localhost:3000/user/${id}`);
      const data = await response.json(); */
      const data = {
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
      <Profile options={{ user: userInfo }} />
      <DeleteAccount token={token} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
