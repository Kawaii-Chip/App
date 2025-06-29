import BasicScreen from "@/components/basic/BasicScreen";
import useDeviceInfoViewModel from "@/data/cloud/viewmodels/DeviceInfoViewModel";
import { useNavigation } from "expo-router";
import { observer } from "mobx-react-lite";
import IndexTopBar from "./IndexTopBar";
import DataCard from "@/components/basic/DataCard";
import { FontAwesome, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import Row from "@/components/basic/Row";
import { ScrollView, StyleSheet } from "react-native";
import setProperties from "@/data/cloud/api/SetProperties";
import DataInputCard from "@/components/basic/DataInputCard";

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
          <DataInputCard
            title="Register"
            placeholder="Destination"
            icon={(color, size) => <FontAwesome name="sign-in" size={size} color={color} />}
            onPress={async (value) => {
              await setProperties(
                1, // appkey
                value, // passenger
                undefined, // quest
              );
            }}
          />
          <DataInputCard
            title="Get in"
            placeholder="Starting"
            icon={(color, size) => <FontAwesome6 name="bus" size={size} color={color} />}
            onPress={async (value) => {
              await setProperties(
                5, // appkey
                undefined, // passenger
                "1" + value, // quest
              );
            }}
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
