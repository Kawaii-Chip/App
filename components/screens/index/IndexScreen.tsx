import BasicScreen from "@/components/basic/BasicScreen";
import useDeviceInfoViewModel from "@/data/cloud/viewmodels/DeviceInfoViewModel";
import { useNavigation } from "expo-router";
import { observer } from "mobx-react-lite";
import IndexTopBar from "./IndexTopBar";
import DataCard from "@/components/basic/DataCard";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import Row from "@/components/basic/Row";

export const IndexScreen = observer(() => {
  const navigation = useNavigation();
  const deviceViewModel = useDeviceInfoViewModel();

  return (
    <BasicScreen>
      <IndexTopBar
        onClickSettings={() => navigation.navigate("settings" as never)}
      />
      <Row style={{ margin: 16, gap: 16 }}>
        <DataCard
          title="Temperature"
          value={`${deviceViewModel.temperature}℃`}
          icon={(color, size) => <FontAwesome6 name="temperature-half" size={size} color={color} />}
        />
        <DataCard
          title="Humidity"
          value={`${deviceViewModel.humidity}%`}
          icon={(color, size) => <MaterialIcons name="water-drop" size={size} color={color} />}
        />
      </Row>
    </BasicScreen>
  );
});
