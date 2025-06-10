import BasicScreen from "@/components/basic/BasicScreen";
import { StyleSheet, Text } from "react-native";

export default function About() {
  return (
    <BasicScreen style={styles.container}>
      <Text>About</Text>
    </BasicScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
