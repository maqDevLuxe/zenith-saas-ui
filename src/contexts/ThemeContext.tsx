/**
 * ThemeContext — Global theme management for the SaaS dashboard.
 * Provides: dark/light mode, RTL/LTR, 10+ color themes, sidebar caption toggle.
 */
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

/* ── Color theme definitions (HSL values) ── */
export const COLOR_THEMES = [
  { name: "Ocean Blue", id: "blue", primary: "217 91% 60%", glow: "217 91% 72%" },
  { name: "Emerald", id: "emerald", primary: "142 71% 45%", glow: "142 71% 60%" },
  { name: "Amber", id: "amber", primary: "38 92% 50%", glow: "38 92% 65%" },
  { name: "Rose", id: "rose", primary: "346 77% 50%", glow: "346 77% 65%" },
  { name: "Violet", id: "violet", primary: "263 70% 50%", glow: "263 70% 65%" },
  { name: "Cyan", id: "cyan", primary: "199 89% 48%", glow: "199 89% 63%" },
  { name: "Orange", id: "orange", primary: "25 95% 53%", glow: "25 95% 68%" },
  { name: "Teal", id: "teal", primary: "172 66% 50%", glow: "172 66% 65%" },
  { name: "Indigo", id: "indigo", primary: "239 84% 67%", glow: "239 84% 78%" },
  { name: "Pink", id: "pink", primary: "330 81% 60%", glow: "330 81% 75%" },
  { name: "Lime", id: "lime", primary: "84 81% 44%", glow: "84 81% 60%" },
  { name: "Slate", id: "slate", primary: "215 20% 50%", glow: "215 20% 65%" },
] as const;

export type ColorThemeId = (typeof COLOR_THEMES)[number]["id"];

interface ThemeContextType {
  /** Current mode: "dark" | "light" */
  mode: "dark" | "light";
  toggleMode: () => void;
  /** Layout direction */
  direction: "ltr" | "rtl";
  toggleDirection: () => void;
  /** Active color theme ID */
  colorTheme: ColorThemeId;
  setColorTheme: (id: ColorThemeId) => void;
  /** Whether sidebar group captions are visible */
  showSidebarCaptions: boolean;
  toggleSidebarCaptions: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  /* ── State with localStorage persistence ── */
  const [mode, setMode] = useState<"dark" | "light">(() =>
    (localStorage.getItem("theme-mode") as "dark" | "light") || "dark"
  );
  const [direction, setDirection] = useState<"ltr" | "rtl">(() =>
    (localStorage.getItem("theme-dir") as "ltr" | "rtl") || "ltr"
  );
  const [colorTheme, setColorThemeState] = useState<ColorThemeId>(() =>
    (localStorage.getItem("theme-color") as ColorThemeId) || "blue"
  );
  const [showSidebarCaptions, setShowSidebarCaptions] = useState(() =>
    localStorage.getItem("sidebar-captions") !== "false"
  );

  /* ── Apply dark/light class ── */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  /* ── Apply direction ── */
  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
    localStorage.setItem("theme-dir", direction);
  }, [direction]);

  /* ── Apply color theme via CSS custom properties ── */
  useEffect(() => {
    const theme = COLOR_THEMES.find((t) => t.id === colorTheme);
    if (theme) {
      document.documentElement.style.setProperty("--primary", theme.primary);
      document.documentElement.style.setProperty("--primary-glow", theme.glow);
      document.documentElement.style.setProperty("--ring", theme.primary);
      document.documentElement.style.setProperty("--sidebar-primary", theme.primary);
      document.documentElement.style.setProperty("--sidebar-ring", theme.primary);
    }
    localStorage.setItem("theme-color", colorTheme);
  }, [colorTheme]);

  /* ── Persist sidebar captions ── */
  useEffect(() => {
    localStorage.setItem("sidebar-captions", String(showSidebarCaptions));
  }, [showSidebarCaptions]);

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));
  const toggleDirection = () => setDirection((d) => (d === "ltr" ? "rtl" : "ltr"));
  const setColorTheme = (id: ColorThemeId) => setColorThemeState(id);
  const toggleSidebarCaptions = () => setShowSidebarCaptions((v) => !v);

  return (
    <ThemeContext.Provider
      value={{ mode, toggleMode, direction, toggleDirection, colorTheme, setColorTheme, showSidebarCaptions, toggleSidebarCaptions }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

/** Hook to consume the theme context */
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
