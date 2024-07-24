import { User } from "@/app/types/users";
import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";

export default function Profile({ user }: { user: User }) {
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Text style={styles.container}>
      {(user && (
        <Text>
          {user.name}
          {user.image}
          {user.description}
          {user.address}
          {user.city}
          {user.email}
          {user.phone}
        </Text>
      )) || <Text>Loading user profile</Text>}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
