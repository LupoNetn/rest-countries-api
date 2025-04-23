import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeSwitcher } from "../assets/context/ThemeSwitcher";

const Layout = () => {
  const { theme, changeTheme } = useContext(ThemeSwitcher);
  return (
    <>
      <nav>
        <div className={`flex justify-between items-center p-10 shadow-md max-sm:p-6 ${theme === 'dark' ? 'shadow-gray-800 shadow-2xl' : ''}`}>
          <h1 className="font-bold text-2xl max-sm:text-[1rem]">
            Where in the world?
          </h1>
          <button
            onClick={changeTheme}
            type="button"
            className=" max-sm:text-xs text-sm cursor-pointer flex items-center gap-2"
          >
            {theme === "light" ? (
              <>
                <FiMoon />
                Dark Mode
              </>
            ) : (
              <>
                <FiSun />
                Light Mode
              </>
            )}
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
