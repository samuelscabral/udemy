import React, { createContext, useState, useLayoutEffect } from "react";
import dark from "styles/themes/dark.module.scss";
import light from "styles/themes/light.module.scss";

export const themes = { dark, light };

type Theme = typeof dark;
type Themes = typeof themes;

interface ThemeContextProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

interface ThemeContextType {
  theme: Theme;
  themes: Themes;
  switchTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({
  children,
  theme: initialTheme = dark,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(initialTheme);

  useLayoutEffect(
    () => {
      // Iterate through each value in theme object
      for (const key in theme) {
        // Update css variables in document's root element
        document.documentElement.style.setProperty(`--${key}`, theme[key]);
      }
    },
    [theme] // Only call again if theme object reference changes
  );

  function switchTheme(newTheme: Theme) {
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themes,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
