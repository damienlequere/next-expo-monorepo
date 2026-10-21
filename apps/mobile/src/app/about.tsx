import { View } from "react-native";
import { Text } from "../components/Text.tsx";

// Opened as a modal (see _layout.tsx), like the dialog of the web frame page.
export default function About() {
  return (
    <View className="flex-1 bg-stone-50 p-6 dark:bg-stone-900">
      <Text tone="muted">
        On mobile, the app uses the whole screen. On the web, the same screen is shown in a device
        frame on a large screen with a mouse.
      </Text>
    </View>
  );
}
