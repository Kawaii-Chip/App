import BasicScreen from "@/components/basic/BasicScreen";
import { StyleSheet, Text } from "react-native";

export default function Index() {
  return (
    <BasicScreen style={styles.container}>
      <Text>Home</Text>
    </BasicScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
