import TopBarButton from "@/components/basic/top-bar-inner/TopBarButton";
import TopBar from "@/components/basic/TopBar";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SettingsTopBar() {
  const navigation = useNavigation();

  return (
    <TopBar
      title="Settings"
      buttonListLeft={(color) => [
        <TopBarButton
          key={1}
          icon={<MaterialIcons name="arrow-back" size={24} color={color} />}
          onPress={() => navigation.goBack()}
        />
      ]}
    />
  )   
}
