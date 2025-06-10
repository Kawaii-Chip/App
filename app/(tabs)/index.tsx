import BasicScreen from "@/components/basic/BasicScreen";
import TopBar from "@/components/basic/TopBar";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <BasicScreen style={styles.container}>
      <TopBar title="Smart Bus" />
    </BasicScreen>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
