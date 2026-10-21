"use client";

import { greeting } from "@template/shared";
import { useState } from "react";
import { Dialog } from "@/components/Dialog.tsx";
import { Screen } from "@/components/Screen.tsx";

const primary =
  "rounded-md bg-amber-700 px-4 py-2 font-medium text-white hover:bg-amber-800 disabled:opacity-50";

// The example's interactive part: the greeting, the form that sets it, and the
// About dialog. The rest of the screen stays on the server.
export const Greeter = () => {
  const [about, setAbout] = useState(false);
  const [name, setName] = useState("");

  return (
    <>
      <Screen.Content>
        <div className="flex flex-1 items-center justify-center">
          <h1 className="text-center font-serif text-2xl font-semibold">{greeting(name)}</h1>
        </div>
      </Screen.Content>

      <Screen.Footer>
        <form
          className="flex gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            setAbout(true);
          }}
        >
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            aria-label="Your name"
            className="min-w-0 flex-1 rounded-md border border-stone-300 bg-white px-3 py-2 outline-none focus:border-amber-600 dark:border-stone-700 dark:bg-stone-900"
          />
          <button type="submit" className={primary}>
            About
          </button>
        </form>
      </Screen.Footer>

      {about && (
        <Dialog title="About this frame" onClose={() => setAbout(false)}>
          <p className="text-stone-600 dark:text-stone-300">
            On a large screen with a mouse, the page is shown in a phone frame (a tablet from 1024
            px). On a phone or a touch tablet, it uses the whole screen. This dialog opens inside
            the frame.
          </p>
        </Dialog>
      )}
    </>
  );
};
