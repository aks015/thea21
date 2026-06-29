/**
 * Holds the active Lenis instance so overlays (modals) can pause smooth
 * scroll while open — otherwise Lenis hijacks the wheel and the page behind
 * scrolls instead of the modal.
 */
import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  instance = l;
}

export function stopLenis() {
  instance?.stop();
}

export function startLenis() {
  instance?.start();
}

/** Smooth-scroll to the top, using Lenis when active, else native scroll. */
export function scrollToTop() {
  if (instance) {
    instance.scrollTo(0);
  } else if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
