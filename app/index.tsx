import { useState } from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

const styles = StyleSheet.create({
  view1: { flex: 1, backgroundColor: "red", justifyContent: "center", alignItems: "center" },
  view2: { flex: 1, backgroundColor: "green", justifyContent: "center", alignItems: "center" },
  view3: { flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" },
  view4: { flex: 1, backgroundColor: "blue" },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  text: { color: "black", fontSize: 30 },
});

export default function Index() {
  const [view3, setView3] = useState(0);

  const view4 = "Texte de la View 4";

  const onPressButton = () => {
    setView3((state) => state + 1);
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={styles.row}>
        <View style={styles.view1}>
          <Image
            source={require("@/assets/images/react-logo.png")}
            alt="logo react-native"
            resizeMethod={"auto"}
            resizeMode={"center"}
          />
        </View>
        <View style={styles.view2}>
          <Button title="cliquer" color={"pink"} onPress={onPressButton} />
        </View>
      </View>
      <View
        style={{
          flex: 5,
        }}>
        <View style={styles.view3}>
          <Text style={styles.text}>{view3}</Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.text}>{view4}</Text>
        </View>
      </View>
    </View>
  );
}
