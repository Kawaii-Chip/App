import TopBarButton from "@/components/basic/top-bar-inner/TopBarButton";
import TopBar from "@/components/basic/TopBar";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  onClickSettings: () => void;
};

export default function IndexTopBar({ onClickSettings }: Props) {
  return (
    <TopBar
      title="Smart Bus"
      buttonListRight={(color) => [
        <TopBarButton
          key={1}
          icon={<MaterialIcons name="settings" size={24} color={color} />}
          onPress={onClickSettings}
        />
      ]}
    />
  )   
}
