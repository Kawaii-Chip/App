import BasicScreen from "@/components/basic/BasicScreen";
import AboutTopBar from "@/components/screens/about/AboutTopBar";
import { StyleSheet } from "react-native";

export default function About() {
  return (
    <BasicScreen style={styles.container}>
      <AboutTopBar />
    </BasicScreen>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
