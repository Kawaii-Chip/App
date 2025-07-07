import BasicScreen from "@/components/basic/BasicScreen";
import DataCard from "@/components/basic/DataCard";
import DataInputCard from "@/components/basic/DataInputCard";
import Row from "@/components/basic/Row";
import useDeviceInfoViewModel from "@/data/cloud/viewmodels/DeviceInfoViewModel";
import { FontAwesome, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import IndexTopBar from "./IndexTopBar";
import { fanOff, fanOn, getInForStarting, lightOff, lightOn, registerForDestination } from "@/data/cloud/api/DeviceControl";

export const IndexScreen = observer(() => {
  const navigation = useNavigation();
  const deviceViewModel = useDeviceInfoViewModel();

  const [fanState, setFanState] = useState(false);
  const [lightState, setLightState] = useState(false);

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
          <DataInputCard
            title="Register"
            placeholder="Destination"
            icon={(color, size) => <FontAwesome name="sign-in" size={size} color={color} />}
            onPress={async (value) => await registerForDestination(Number(value))}
          />
          <DataInputCard
            title="Get in"
            placeholder="Starting"
            icon={(color, size) => <FontAwesome6 name="bus" size={size} color={color} />}
            onPress={async (value) => await getInForStarting(Number(value))}
          />
        </Row>
        <Row style={styles.row}>
          <DataCard
            title="Temperature"
            value={`${deviceViewModel.temperature}℃`}
            icon={(color, size) => <FontAwesome6 name="temperature-half" size={size} color={color} />}
            onPress={async () => await deviceViewModel.flush()}
          />
          <DataCard
            title="Humidity"
            value={`${deviceViewModel.humidity}%`}
            icon={(color, size) => <MaterialIcons name="water-drop" size={size} color={color} />}
            onPress={async () => await deviceViewModel.flush()}
          />
        </Row>
        <Row style={styles.row}>
          <DataCard
            title="Light"
            value={lightState ? "On" : "Off"}
            icon={(color, size) => lightState
              ? <MaterialIcons name="lightbulb" size={size} color={color} />
              : <MaterialIcons name="lightbulb-outline" size={size} color={color} />
            }
            onPress={async () => {
              setLightState(prev => !prev);
              await (lightState ? lightOff() : lightOn());
            }}
          />
          <DataCard
            title="Fan"
            value={fanState ? "On" : "Off"}
            icon={(color, size) => fanState
              ? <MaterialCommunityIcons name="fan" size={size} color={color} />
              : <MaterialCommunityIcons name="fan-off" size={size} color={color} />
            }
            onPress={async () => {
              setFanState(prev => !prev);
              await (fanState ? fanOff() : fanOn());
            }}
          />
        </Row>
        <Row style={styles.row}>
          <DataInputCard
            title="AI"
            placeholder="Demand"
            icon={(color, size) => <MaterialIcons name="support-agent" size={size} color={color} />}
            onPress={async (value) => {}}
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
