import type { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Same layout as the web Screen (apps/web/components/Screen.tsx), in three
// bands: the top bar; the content, which scrolls; and the commands at the
// bottom, which the keyboard pushes up instead of covering.
//
//   <Screen>
//     <Screen.Header>…</Screen.Header>
//     <Screen.Content>…</Screen.Content>
//     <Screen.Footer>…</Screen.Footer>
//   </Screen>
const Root = ({ children }: { children: ReactNode }) => (
  <SafeAreaView className="flex-1 bg-stone-100 dark:bg-stone-950">
    {/* Android resizes the window for the keyboard; iOS needs the padding. */}
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1"
    >
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
);

const Header = ({ children }: { children: ReactNode }) => (
  <View className="min-h-14 flex-row items-center gap-2 border-b border-stone-300 px-4 py-2 dark:border-stone-800">
    {children}
  </View>
);

const Content = ({ children }: { children: ReactNode }) => (
  <ScrollView
    className="flex-1"
    contentContainerClassName="grow px-4 py-6"
    keyboardShouldPersistTaps="handled"
  >
    {children}
  </ScrollView>
);

const Footer = ({ children }: { children: ReactNode }) => (
  <View className="border-t border-stone-300 px-4 py-4 dark:border-stone-800">{children}</View>
);

export const Screen = Object.assign(Root, { Header, Content, Footer });
