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
