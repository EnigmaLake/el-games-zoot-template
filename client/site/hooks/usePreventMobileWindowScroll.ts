function preventDefault(e: TouchEvent) {
  e.preventDefault();
}

/**
 * Hook to prevent window scrolling on mobile, useful for components with horizontal scroll.
 */
export function usePreventMobileWindowScroll() {
  return {
    startPreventingWindowScroll: () =>
      // Let the browser know it is not a passive listener because it prevents scrolling.
      // https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/
      window.addEventListener("touchmove", preventDefault, { passive: false }),
    stopPreventingWindowScroll: () =>
      window.removeEventListener("touchmove", preventDefault),
  };
}
