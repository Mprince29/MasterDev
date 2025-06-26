if (typeof window !== "undefined") {
  const originalConsoleError = window.console.error;
  window.console.error = function (...args) {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Missing property")
    ) {
      return;
    }
    originalConsoleError.apply(window.console, args);
  };

  const originalConsoleWarn = window.console.warn;
  window.console.warn = function (...args) {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Missing property")
    ) {
      return;
    }
    originalConsoleWarn.apply(window.console, args);
  };
} 