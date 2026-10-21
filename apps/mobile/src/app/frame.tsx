import { APP_NAME, greeting } from "@template/shared";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { Screen } from "../components/Screen.tsx";
import { Text } from "../components/Text.tsx";

// Same screen as the web frame page (apps/web/app/frame/page.tsx).
export default function Frame() {
  const [name, setName] = useState("");

  return (
    <Screen>
      <Screen.Header>
        <Text className="flex-1 font-semibold">{APP_NAME}</Text>
        {/* Back to the home screen, without stacking a new one. */}
        <Link dismissTo href="/" className="text-sm text-stone-500 underline dark:text-stone-400">
          Home
        </Link>
      </Screen.Header>

      <Screen.Content>
        <View className="flex-1 items-center justify-center">
          <Text className="w-full text-center font-serif text-2xl font-semibold">
            {greeting(name)}
          </Text>
        </View>
      </Screen.Content>

      <Screen.Footer>
        <View className="flex-row gap-2">
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Your name"
            accessibilityLabel="Your name"
            className="flex-1 rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
          />
          <Link href="/about" asChild>
            <Pressable className="justify-center rounded-md bg-amber-700 px-4 py-2 active:bg-amber-800">
              <Text tone="onAccent" className="font-medium">
                About
              </Text>
            </Pressable>
          </Link>
        </View>
      </Screen.Footer>
    </Screen>
  );
}
