import { FallbackColor } from "@/constants/MaterialTheme";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

type Props = {
  title: string;
};

export default function TopBar({ title }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const { theme } = useMaterial3Theme({ fallbackSourceColor: FallbackColor });

  const elementColor = theme[colorScheme].onSecondaryContainer;

  return (
    <View style={styles.container}>
      <Text style={[{ color: elementColor }, styles.text]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
