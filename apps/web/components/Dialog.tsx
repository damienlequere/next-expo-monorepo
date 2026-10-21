"use client";

import { type ReactNode, useEffect, useEffectEvent, useId, useRef } from "react";

// Dialog that opens in the device frame (#device is positioned, so `absolute`
// stays inside it), not over the whole window. Render it only while it is open
// (`{open && <Dialog … />}`): the rest of the screen, its siblings, is then
// inert, Escape closes it, and the focus goes back to where it was.
export const Dialog = ({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose(): void;
  children: ReactNode;
}) => {
  const titleId = useId();
  const root = useRef<HTMLDivElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const onEscape = useEffectEvent(onClose);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const siblings = [...(root.current?.parentElement?.children ?? [])].filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement && element !== root.current && !element.inert,
    );
    for (const element of siblings) element.inert = true;
    close.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onEscape();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      for (const element of siblings) element.inert = false;
      previous?.focus();
    };
  }, []);

  return (
    <div ref={root} className="absolute inset-0 z-10">
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute top-1/2 left-1/2 max-h-[85%] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-stone-50 p-6 shadow-xl dark:bg-stone-900"
      >
        <h2 id={titleId} className="mb-4 text-lg font-semibold">
          {title}
        </h2>
        {children}
        <button
          ref={close}
          type="button"
          onClick={onClose}
          className="mt-6 rounded-md border border-stone-300 px-3 py-1.5 text-sm hover:border-amber-600 dark:border-stone-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};
