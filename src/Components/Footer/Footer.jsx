import React, { useState, useEffect } from "react";
import "./Footer.css";
import logo from "../../assets/images/nav/Logo.png";
import arrowtop from "../../assets/images/footer/Button.png";
import { Link } from "react-router-dom";
import { links } from "../Data/LinksData";
import { FooterLinkData } from "../Data/FooterLinkData";
import FooterLink from "../FooterLink/FooterLink";

export default function Footer() {
  const [activeLink, setActiveLink] = useState("");
  const [animationClass, setAnimationClass] = useState("");
  const handleLinkClick = (path) => {
    setActiveLink(path);
    setAnimationClass("slideUpFadeIn");
    setTimeout(() => setAnimationClass(""), 1000);

  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="sh-footer">
      <div className="logo-link-footer ">
        <img className="sh-logo-img logo" src={logo} />
        <ul className={`WO-Menu2 mb-0 ${animationClass} `}>
          {links.slice(0, 6).map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="fw-600 fs-18-14"
                // className={activeLink === link.path ? "WO-Active1" : ""}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sh-btn-top" onClick={handleScrollToTop}>
          <p className="fw-600 fs-18-16 mb-0">Got To Top</p>
          <img src={arrowtop} />
        </div>

      </div>
      <div className="logo-link-footer2 ">
        <div className="WO-logo-link-footer2-1">
          <img className="sh-logo-img logo" src={logo} />
          <div className=" sh-btn-top" onClick={handleScrollToTop}>
            <p className="fw-600 fs-18-16 mb-0">Got To Top</p>
            <img src={arrowtop} />
          </div>
        </div>
        <ul className={`WO-Menu2 mb-0 ${animationClass} `}>
          {links.slice(0, 6).map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="fw-600 fs-18-14"
                // className={activeLink === link.path ? "WO-Active1" : ""}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="WO-Bottom-footer">
        <div className="AllFooterLink">
          {
            FooterLinkData.map((data, index) => (
              <FooterLink
                key={index}
                WOIcon1={data.WOIcon1}
                WOLink1={data.WOLink1}

              />
            ))
          }

        </div>
        <p className="fs-18-14 mb-0">© 2023 Nutritionist. All rights reserved.</p>
      </div>

    </div>

  );
}
