import { FallbackColor } from '@/constants/MaterialTheme';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const { theme } = useMaterial3Theme({ fallbackSourceColor: FallbackColor });
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: theme[colorScheme].secondaryContainer,
    }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
