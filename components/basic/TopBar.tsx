import { FallbackColor } from "@/constants/MaterialTheme";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { ColorValue, StyleSheet, Text, useColorScheme, View } from "react-native";

type Props = {
  title: string;
  buttonListLeft?: (color: ColorValue) => React.ReactNode[];
  buttonListRight?: (color: ColorValue) => React.ReactNode[];
};

export default function TopBar({ title, buttonListLeft, buttonListRight }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const { theme } = useMaterial3Theme({ fallbackSourceColor: FallbackColor });

  const backgroundColor = theme[colorScheme].secondaryContainer;
  const elementColor = theme[colorScheme].onSecondaryContainer;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.leftRow}>
        {buttonListLeft && (
          <View style={styles.buttonList}>
            {buttonListLeft(elementColor)}
          </View>
        )}
        <Text style={[{ color: elementColor }, styles.text]}>{title}</Text>
      </View>
      {buttonListRight && (
        <View style={styles.buttonList}>
          {buttonListRight(elementColor)}
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
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
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
