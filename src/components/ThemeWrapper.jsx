// ThemeWrapper.jsx
import React, { useContext } from "react";
import { ThemeSwitcher } from "../assets/context/ThemeSwitcher";


const ThemeWrapper = ({ children }) => {
  const { theme } = useContext(ThemeSwitcher);

  return (
    <div
      className={`min-h-screen bg-white text-black 
                     ${
                       theme === "dark"
                         ? "dark:bg-zinc-900 dark:text-white"
                         : ""
                     } 
                     transition-colors duration-300`}
    >
      {children}
    </div>
  );
};

export default ThemeWrapper;
