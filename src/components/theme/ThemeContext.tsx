import React, { useEffect, useState, createContext, ReactNode } from "react";

interface ThemeContextProps {
  theme?: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPref = window.localStorage.getItem("color-theme");
    if (typeof storedPref === "string") {
      return storedPref;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
    return "light"; // light theme as the default;
  }
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

interface ThemeProviderProps {
  initialTheme?: string | (() => string);
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof initialTheme === "function") {
      return (initialTheme as () => string | any)();
    }
    return initialTheme || getInitialTheme();
  });

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);
    localStorage.setItem("color-theme", rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
