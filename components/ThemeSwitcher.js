"use client"
import { useContext, useEffect, useState } from "react";
import { ConfigContext } from "@/utils/configContext";

function ThemeSwitcher() {
  const config = useContext(ConfigContext);
  const [mode, setMode] = useState("light");

  // Apply theme on mount
  useEffect(() => {
    function getPreferredColorScheme() {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    }

    const storedTheme = localStorage.getItem("theme");
    const theme = storedTheme ?? getPreferredColorScheme();
    setMode(theme);

    // Apply both data-theme attribute and dark class
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = mode === "dark" ? config?.theme || "light" : "dark";
    setMode(newMode);

    // Update both data-theme attribute and dark class
    document.documentElement.setAttribute("data-theme", newMode);
    if (newMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition"
      aria-label="Toggle Theme"
    >
      {mode === "dark" ? (
        // Light mode icon (sun)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="primary"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      ) : (
        // Dark mode icon (moon)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-800 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="primary"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default ThemeSwitcher;
