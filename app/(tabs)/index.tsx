import BasicScreen from "@/components/basic/BasicScreen";
import IndexTopBar from "@/components/screens/index/IndexTopBar";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <BasicScreen style={styles.container}>
      <IndexTopBar
        onClickSettings={() => {}}
      />
    </BasicScreen>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
