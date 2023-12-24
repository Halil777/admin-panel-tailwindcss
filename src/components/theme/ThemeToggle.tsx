import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

interface ToggleProps {}

const Toggle: React.FC<ToggleProps> = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    // Handle the case where context is undefined (optional)
    return null;
  }

  const { theme, setTheme } = context;

  return (
    <div className="transition ease-in-out duration-500 rounded-full p-2">
      {theme === "dark" ? (
        <FaSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 text-2xl dark:text-gray-400 cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 text-2xl dark:text-gray-400 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
