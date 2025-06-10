import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  icon: React.ReactNode;
  onPress: () => void;
};

export default function TopBarButton({ icon, onPress }: Props) {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
});
