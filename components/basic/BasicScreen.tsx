import { StyleProp, useColorScheme, View, ViewStyle } from "react-native";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { FallbackColor } from "@/constants/MaterialTheme";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    style?: StyleProp<ViewStyle>;
}>;

export default function Index({ children, style }: Props) {
  const { theme } = useMaterial3Theme({ fallbackSourceColor: FallbackColor });
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <View
      style={[{
        flex: 1,
        backgroundColor: theme[colorScheme].secondaryContainer,
      }, style]}
    >
      {children}
    </View>
  );
}
