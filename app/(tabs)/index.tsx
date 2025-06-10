import BasicScreen from "@/components/basic/BasicScreen";
import IndexTopBar from "@/components/screens/index/IndexTopBar";
import { useNavigation } from "expo-router";
import { StyleSheet } from "react-native";

export default function Index() {
  const navigation = useNavigation();

  return (
    <BasicScreen style={styles.container}>
      <IndexTopBar
        onClickSettings={() => navigation.navigate("settings" as never)}
      />
    </BasicScreen>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
