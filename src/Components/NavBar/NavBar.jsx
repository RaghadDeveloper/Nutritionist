import "./NavBar.css";
import React, { useState } from "react";
import Abstract from "../../assets/images/nav/Abstract Design 1.png";
import Abstract2 from "../../assets/images/nav/Abstract Design 2.png";
import Abstract3 from "../../assets/images/nav/Abstract Design 3.png";
import Abstract4 from "../../assets/images/nav/Abstract Design 4.png";
import Abstract5 from "../../assets/images/nav/Abstract Design 5.png";
import Abstract6 from "../../assets/images/nav/Abstract Design 6.png";
import cricketball from "../../assets/images/nav/cricket ball.png";
import rightarrow from "../../assets/images/nav/right arrow.png";
import logo from "../../assets/images/nav/Logo.png"
import { Link ,useLocation } from "react-router-dom";
import BoxIcon from "../../assets/images/nav/Icon.png"
import { links } from "../Data/LinksData";



export default function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [animationClass, setAnimationClass] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setMenuOpen(false);
    setAnimationClass("slideUpFadeIn");
    setTimeout(() => setAnimationClass(""), 1000);
  };

  return (
    <>
      <nav>
        <img className=" SH-Abstract-left3" src={Abstract5} alt="" />
        <div className="SH-logo">
          <img className=" SH-Abstract-left" src={Abstract} alt="" />
          <img className=" SH-Abstract-left2" src={Abstract3} alt="" />
          <div className="navInfo">
            <img className="SH-cricketball" src={cricketball} alt="" />
            <p>Join Our Personalized Nutrition Demo For Free</p>
          </div>
          <img className="SH-rightarrow" src={rightarrow} alt="" />
          <img className=" SH-Abstract-right" src={Abstract2} alt="" />
          <img className=" SH-Abstract-right2" src={Abstract4} alt="" />
        </div>
        <img className=" SH-Abstract-right3" src={Abstract6} alt="" />
      </nav>
      <div className="NavBar">
        <Link to={'/'}><img className="WO-Logo logo" src={logo} /></Link>
        <div className="Wo-RightSide" style={{ display: menuOpen ? "flex" : "none" }}>
          <ul className={`WO-Menu mb-0 ${animationClass}`}>
            {links.slice(0, 6).map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? "WO-Active1" : ""}
                  onClick={() => handleLinkClick(link.path)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <button className="WO-Button">

            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "WO-Active1" : ""}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact Us
            </Link>

          </button>

        </div>
        <img className="BoxIcon" src={BoxIcon} alt="Menu Icon" onClick={toggleMenu} />
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <ul className="WO-Menu mb-0">
            {links.slice(0, 6).map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? "WO-Active1" : ""}
                  onClick={() => handleLinkClick(link.path)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <button className="WO-Button">
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "WO-Active1" : ""}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact Us
            </Link>
          </button>
        </div>
      )}

    </>
  );
}

