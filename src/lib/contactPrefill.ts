/**
 * Lightweight bridge so any component (e.g. the project modal) can pre-fill
 * the contact form's message and scroll to it — without prop-drilling.
 */

type Listener = (message: string) => void;

let listener: Listener | null = null;

export function onContactPrefill(l: Listener): () => void {
  listener = l;
  return () => {
    if (listener === l) listener = null;
  };
}

export function prefillContact(message: string): void {
  listener?.(message);
  if (typeof document !== "undefined") {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
