import React, { useEffect, useState } from "react";
import sun from "../../../assets/icons/sun.svg";
import moon from "../../../assets/icons/moon.svg";

const ThemeToggleButton = ({ setRefresh = () => {} }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setRefresh(!isDarkMode);
  };

  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <label htmlFor="darkModeToggle">
        <img className="w-6" src={sun} />
      </label>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          id="darkModeToggle"
          defaultChecked={isDarkMode}
          className="sr-only peer"
          onChange={(e) => toggleTheme(e.target.checked)}
        />
        <div className="w-11 h-6 bg-[#D9D9D9] border border-black focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] peer-checked:after:border-[#27536B] peer-checked:after:bg-[#27536B] after:absolute after:top-[2px] after:left-[2px] after:border after:border-[#FEF156] after:bg-[#FEF156] after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
      </label>
      <label htmlFor="darkModeToggle">
        <img className="w-6" src={moon} />
      </label>
    </div>
  );
};

export default ThemeToggleButton;
