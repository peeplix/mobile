import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";

import Colors from "@/constants/Colors";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["dark"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Locals Nearby",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerShown: true,
          headerBackground: () => (
            <BlurView
              tint={"dark"}
              intensity={50}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            ></BlurView>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerShown: true,
          headerBackground: () => (
            <BlurView
              tint={"dark"}
              intensity={50}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            ></BlurView>
          ),
        }}
      />
    </Tabs>
  );
}
