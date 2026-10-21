import { Text as NativeText, type TextProps } from "react-native";

// React Native text does not inherit its color from the parent view, so each
// Text gets one, light and dark, from its tone. A color in `className` would
// not reliably override the tone's (the order of the generated styles decides),
// so the color always comes from the tone.
const tones = {
  default: "text-stone-900 dark:text-stone-100",
  muted: "text-stone-600 dark:text-stone-300",
  subtle: "text-stone-500 dark:text-stone-400",
  accent: "text-amber-800 dark:text-amber-300",
  onAccent: "text-white",
};

export const Text = ({
  tone = "default",
  className,
  ...props
}: TextProps & { tone?: keyof typeof tones }) => (
  <NativeText className={className ? `${tones[tone]} ${className}` : tones[tone]} {...props} />
);
