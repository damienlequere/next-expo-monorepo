import { APP_NAME, TAGLINE } from "@template/shared";
import { Link } from "expo-router";
import { Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "../components/Text.tsx";

// Same screen as the web home page (apps/web/app/page.tsx).
export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-stone-100 dark:bg-stone-950">
      <ScrollView contentContainerClassName="px-4 py-12">
        <Text className="font-serif text-4xl font-semibold">{APP_NAME}</Text>
        <Text tone="muted" className="mt-3 text-lg">
          {TAGLINE}
        </Text>
        <Link href="/frame" asChild>
          <Pressable className="mt-8 rounded-lg border border-stone-300 bg-white p-5 active:border-amber-600 dark:border-stone-700 dark:bg-stone-900 dark:active:border-amber-400">
            <Text className="font-serif text-xl font-semibold">Frame example</Text>
            <Text tone="subtle" className="mt-1 text-sm">
              The same screen as the web page in a device frame.
            </Text>
            <Text tone="accent" className="mt-3 text-sm font-medium">
              Open →
            </Text>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}
