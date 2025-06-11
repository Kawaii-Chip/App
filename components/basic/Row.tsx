import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export default function Row({ children, style }: Props) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
});
