import BasicScreen from "@/components/basic/BasicScreen";
import SettingsTopBar from "@/components/screens/settings/SettingsTopBar";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <BasicScreen style={styles.container}>
      <SettingsTopBar />
    </BasicScreen>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
