//import LogoBlue from "../../assets/images/logo_blue.svg";
//import LogoWhite from "../../assets/images/logo_white.svg";
import { useContext, useEffect, useRef } from "react";
import LogoW from "../../../assets/OffconnectX.png";
import "./Sidebar.scss"

import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";

import "./Sidebar.scss";
import { SidebarContext } from "../../../context/SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  async function handleLogout() {
    try {
      console.log('Signing out...');
    } catch {
      console.error("Failed to log out");
    }
  }
  async function handleTx() {
    try {
      console.log('Signing out...');
    } catch {
      console.error("Failed to log out");
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={"OffconnectX.png"} alt="" style={{ width: "40px", height: "40px" }} />
          <span className="sidebar-brand-text">OffConnectX</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              {/* <NavLink to="/" className="menu-link" activeClassName="active" exact> */}
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              {/* </NavLink> */}
            </li>
            <li className="menu-item">
              {/* <NavLink to="/statistics" className="menu-link" activeClassName="active"> */}
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Statistics</span>
              {/* </NavLink> */}
            </li>
            <li className="menu-item">
              {/* <NavLink to="/send" className="menu-link" activeClassName="active"> */}
                <span className="menu-link-icon">
                  <MdOutlineAttachMoney size={20} />
                </span>
                <span className="menu-link-text">Send</span>
              {/* </NavLink> */}
            </li>
            <li className="menu-item">
              {/* <NavLink to="/deposit" className="menu-link" activeClassName="active"> */}
                <span className="menu-link-icon">
                  <MdOutlineShoppingBag size={20} />
                </span>
                <span className="menu-link-text">Deposit</span>
              {/* </NavLink> */}
            </li>
            <li className="menu-item">
              {/* <NavLink to="/transfer" className="menu-link" activeClassName="active"> */}
                <span className="menu-link-icon">
                  <MdOutlinePeople size={20} />
                </span>
                <span className="menu-link-text">Transfer</span>
              {/* </NavLink> */}
            </li>
            <li className="menu-item">
              {/* <NavLink to="/transactions" className="menu-link" activeClassName="active"> */}
                <span className="menu-link-icon">
                  <MdOutlineCurrencyExchange size={18} />
                </span>
                <span className="menu-link-text">Transactions</span>
              {/* </NavLink> */}
            </li>
            <li className="menu-item">
              {/* <NavLink to="/announcement" className="menu-link" activeClassName="active"> */}
                <span className="menu-link-icon">
                  <MdOutlineMessage size={18} />
                </span>
                <span className="menu-link-text">Announcement</span>
              {/* </NavLink> */}
            </li>
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
          <li className="menu-item">
              <button onClick={handleTx} className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Tx</span>
              </button>
            </li>
            <li className="menu-item">
              {/* <NavLink to="/settings" className="menu-link" activeClassName="active"> */}
                <span className="menu-link-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Settings</span>
              {/* </NavLink> */}
            </li>
            <li className="menu-item">
              <button onClick={handleLogout} className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
