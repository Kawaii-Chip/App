import { View } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not Found' }} />
      <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
      >
        <Link href="/">
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}
