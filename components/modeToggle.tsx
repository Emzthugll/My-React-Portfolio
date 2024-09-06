"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme(); // Use resolvedTheme for better accuracy
  const [mounted, setMounted] = useState(false);

  // Ensure the theme has been set up correctly before mounting the component
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering of the toggle button until mounted is true
  if (!mounted) {
    return null;
  }

  const isDarkMode = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      className={isDarkMode ? "text-white" : "text-black"}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
