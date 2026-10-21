import type { ReactNode } from "react";

// Reading column: on a large screen (tablet), the text keeps a comfortable line
// length; separators stay full width.
const column = "mx-auto max-w-2xl px-4";

// Screen laid out like a phone app in three bands: the top bar; the content,
// which scrolls; and, fixed at the bottom of the frame, the commands.
//
//   <Screen>
//     <Screen.Header>…</Screen.Header>
//     <Screen.Content>…</Screen.Content>
//     <Screen.Footer>…</Screen.Footer>
//   </Screen>
//
// No state here: the parts render on the server, or inside a client component.
const Root = ({ children }: { children: ReactNode }) => (
  <div className="flex h-full flex-col">{children}</div>
);

const Header = ({ children }: { children: ReactNode }) => (
  <div className="shrink-0 border-b border-stone-300 dark:border-stone-800">
    <div className={`${column} flex min-h-14 items-center gap-2 py-2`}>{children}</div>
  </div>
);

// The scrollbar gutter is reserved on both sides so the text column stays
// centered like the bars.
const Content = ({ children }: { children: ReactNode }) => (
  <main className="min-h-0 flex-1 overflow-y-auto [scrollbar-gutter:stable_both-edges]">
    <div className={`${column} flex min-h-full flex-col py-6`}>{children}</div>
  </main>
);

const Footer = ({ children }: { children: ReactNode }) => (
  <div className="shrink-0 border-t border-stone-300 dark:border-stone-800">
    <div className={`${column} py-4 pb-[max(1rem,env(safe-area-inset-bottom))]`}>{children}</div>
  </div>
);

export const Screen = Object.assign(Root, { Header, Content, Footer });
