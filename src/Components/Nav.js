import React, { useState, useEffect } from "react";
import logoImg from "../Images/Frank-logos_white - Copy.png";
import "../Css/Nav.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    });
  }, []);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <nav className={`nav ${showNavbar && "nav__black"}`}>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Link to={"/"}>
          <img src={logoImg} alt="Logo" className="nav__logo" />
        </Link>

        <div className="nav__burger">
          <Link to={"#"} className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to={"#"} className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </nav>
  );
}

export default Nav;
