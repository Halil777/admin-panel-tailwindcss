import React, { useContext } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { ThemeContext } from "./ThemeContext";
import { BsMoon } from "react-icons/bs";

interface ToggleProps {}

const Toggle: React.FC<ToggleProps> = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  const { theme, setTheme } = context;

  return (
    <div className="transition ease-in-out duration-500 rounded-full p-2 bg-gray-200">
      {theme === "dark" ? (
        <MdOutlineWbSunny
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 text-xl dark:text-gray-400 cursor-pointer"
        />
      ) : (
        <BsMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 text-xl dark:text-gray-400 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
