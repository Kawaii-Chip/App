import { FallbackColor } from "@/constants/MaterialTheme";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { ColorValue, StyleSheet, Text, useColorScheme, View } from "react-native";

type Props = {
  title: string;
  buttonList?: (color: ColorValue) => React.ReactNode[];
};

export default function TopBar({ title, buttonList }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const { theme } = useMaterial3Theme({ fallbackSourceColor: FallbackColor });

  const elementColor = theme[colorScheme].onSecondaryContainer;

  return (
    <View style={styles.container}>
      <Text style={[{ color: elementColor }, styles.text]}>{title}</Text>
      {buttonList && (
        <View style={styles.buttonList}>
          {buttonList(elementColor)}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    gap: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonList: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
