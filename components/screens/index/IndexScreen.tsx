import BasicScreen from "@/components/basic/BasicScreen";
import useDeviceInfoViewModel from "@/data/cloud/viewmodels/DeviceInfoViewModel";
import { useNavigation } from "expo-router";
import { observer } from "mobx-react-lite";
import IndexTopBar from "./IndexTopBar";
import { Text } from "react-native";

export const IndexScreen = observer(() => {
  const navigation = useNavigation();
  const deviceViewModel = useDeviceInfoViewModel();

  return (
    <BasicScreen>
      <IndexTopBar
        onClickSettings={() => navigation.navigate("settings" as never)}
      />
      <Text>{`${deviceViewModel.temperature}℃, ${deviceViewModel.humidity}%`}</Text>
    </BasicScreen>
  );
});
