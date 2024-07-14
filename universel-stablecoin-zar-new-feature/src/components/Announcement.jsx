import { useEffect, useContext } from "react";
import Sidebar from "./sidebar/Sidebar";
import "../App.scss";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import MoonIcon from "../assets/icons/moon.svg";
import SunIcon from "../assets/icons/sun.svg";
import Announcement from "../screens/announcement/AnnouncementScreen"

export default function Dashboard() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  




  return (
    <main className="page-wrapper">
      <Sidebar />
      <div className="content-wrapper">
          <Announcement />
        
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
          >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </div>
    </main>
    
  );
}


