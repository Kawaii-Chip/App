import BasicScreen from "@/components/basic/BasicScreen";
import useDeviceInfoViewModel from "@/data/cloud/viewmodels/DeviceInfoViewModel";
import { useNavigation } from "expo-router";
import { observer } from "mobx-react-lite";
import IndexTopBar from "./IndexTopBar";
import DataCard from "@/components/basic/DataCard";
import { FontAwesome6, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Row from "@/components/basic/Row";
import { ScrollView, StyleSheet } from "react-native";

export const IndexScreen = observer(() => {
  const navigation = useNavigation();
  const deviceViewModel = useDeviceInfoViewModel();

  return (
    <BasicScreen>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <IndexTopBar
          onClickSettings={() => navigation.navigate("settings" as never)}
        />
        <Row style={styles.row}>
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
        <Row style={styles.row}>
          <DataCard
            title="Passengers"
            value={`${deviceViewModel.passengerNumber}`}
            icon={(color, size) => <MaterialCommunityIcons name="seat-passenger" size={size} color={color} />}
          />
        </Row>
      </ScrollView>
    </BasicScreen>
  );
});

const styles = StyleSheet.create({
  scrollViewContent: {
    gap: 16,
  },
  row: {
    marginHorizontal: 16,
    gap: 16,
  },
});
