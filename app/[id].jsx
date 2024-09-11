import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Detail() {
  const local = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text>Ceci est la page de détail {local.id}</Text>
      </View>
    </View>
  );
}
