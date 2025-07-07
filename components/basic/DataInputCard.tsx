import { FallbackColor } from "@/constants/MaterialTheme";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";

type Props = {
  title: string;
  placeholder?: string;
  icon: (color: string, size: number) => React.ReactNode;
  onPress: (value: string) => void;
};

export default function DataInputCard({ title, placeholder, icon, onPress }: Props) {
  const { theme } = useMaterial3Theme({ fallbackSourceColor: FallbackColor });
  const colorScheme = useColorScheme() ?? "light";

  const [value, setValue] = useState("");

  const backgroundColor = theme[colorScheme].primaryContainer;
  const elementColor = theme[colorScheme].onPrimaryContainer;
  const inputBoxColor = theme[colorScheme].inversePrimary;
  const iconSize = 36;

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={() => onPress(value)}
    >
      <Text style={[styles.title, { color: elementColor }]}>{title}</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.value, { backgroundColor: inputBoxColor, color: elementColor }]}
          placeholder={placeholder}
          placeholderTextColor={elementColor}
          onChangeText={setValue}
        >
          {value}
        </TextInput>
        {icon(elementColor, iconSize)}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    padding: 24,
    gap: 16,
    pointerEvents: "box-none",
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
    borderRadius: 16,
    padding: 8,
  },
});
