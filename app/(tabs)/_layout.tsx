import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme } from 'react-native';
import { FallbackColor } from '@/constants/MaterialTheme';

export default function TabLayout() {
  const { theme } = useMaterial3Theme({ fallbackSourceColor: FallbackColor });
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        paddingBottom: 0,
        height: 56,
      },
      tabBarActiveTintColor: theme[colorScheme].onSecondaryContainer,
      tabBarInactiveTintColor: theme[colorScheme].onSecondaryContainer,
      tabBarActiveBackgroundColor: theme[colorScheme].secondaryContainer,
      tabBarInactiveBackgroundColor: theme[colorScheme].secondaryContainer,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle-sharp' : 'information-circle-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
