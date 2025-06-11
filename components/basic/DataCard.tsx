import { FallbackColor } from "@/constants/MaterialTheme";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";

type Props = {
  title: string;
  value: string;
  icon: (color: string, size: number) => React.ReactNode;
  onPress?: () => void;
};

export default function DataCard({ title, value, icon, onPress }: Props) {
  const { theme } = useMaterial3Theme({ fallbackSourceColor: FallbackColor });
  const colorScheme = useColorScheme() ?? "light";

  const backgroundColor = theme[colorScheme].primaryContainer;
  const elementColor = theme[colorScheme].onPrimaryContainer;
  const iconSize = 36;

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Text style={styles.value}>{value}</Text>
        {icon(elementColor, iconSize)}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 8,
  },
  value: {
    fontSize: 16,
  },
});
