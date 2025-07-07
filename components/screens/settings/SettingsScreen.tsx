import BasicScreen from "@/components/basic/BasicScreen";
import DataCard from "@/components/basic/DataCard";
import Row from "@/components/basic/Row";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { observer } from "mobx-react-lite";
import { ScrollView, StyleSheet } from "react-native";
import SettingsTopBar from "./SettingsTopBar";
import { genLogToSDcard, gotoNextStation } from "@/data/cloud/api/DeviceControl";

export const SettingsScreen = observer(() => {
  return (
    <BasicScreen>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <SettingsTopBar />
        <Row style={styles.row}>
          <DataCard
            title="Next Station"
            value="✓"
            icon={(color, size) => <MaterialCommunityIcons name="bus-marker" size={size} color={color} />}
            onPress={async () => await gotoNextStation()}
          />
          <DataCard
            title="Gen Log"
            value="SDcard"
            icon={(color, size) => <MaterialCommunityIcons name="file-document-edit" size={size} color={color} />}
            onPress={async () => await genLogToSDcard()}
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
