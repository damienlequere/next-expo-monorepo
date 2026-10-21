import { APP_NAME } from "@template/shared";
import type { Metadata } from "next";
import Link from "next/link";
import { Screen } from "@/components/Screen.tsx";
import { Greeter } from "./Greeter.tsx";

export const metadata: Metadata = { title: "Frame example" };

export default function FramePage() {
  return (
    <Screen>
      <Screen.Header>
        <p className="min-w-0 flex-1 truncate font-semibold">{APP_NAME}</p>
        <Link
          href="/"
          className="text-sm text-stone-500 underline underline-offset-4 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-100"
        >
          Home
        </Link>
      </Screen.Header>
      <Greeter />
    </Screen>
  );
}
