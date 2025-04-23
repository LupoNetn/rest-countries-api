import React, { useContext } from "react";
import { ThemeSwitcher } from "../assets/context/ThemeSwitcher";

const Spinner = () => {
    const {theme} = useContext(ThemeSwitcher)
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className={`w-10 h-10 border-4 ${theme === 'light' ? 'border-black' : 'border-white'} border-dashed rounded-full animate-spin`}></div>
      </div>
    );
  };
  
  export default Spinner;
  