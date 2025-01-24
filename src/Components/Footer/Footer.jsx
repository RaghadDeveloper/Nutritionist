import "./Footer.css";
import logo from "../../assets/images/nav/Logo.png";
import arrowtop from "../../assets/images/footer/Button.png";

import { Link } from "react-router-dom";
import { links } from "../Data/LinksData";
import { useState } from "react";
import { FooterLinkData } from "../Data/FooterLinkData";
import FooterLink from "../FooterLink/FooterLink";

export default function Footer() {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <div className="sh-footer">
      <div className="logo-link-footer ">
        <img className="sh-logo-img" src={logo} />
        <ul className="WO-Menu2 mb-0">
          {links.slice(0, 6).map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={activeLink === link.path ? "WO-Active1" : ""}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className=" sh-btn-top">
          <p className="mb-0">Got To Top</p>
          <img src={arrowtop} />
        </div>

      </div>
      <div className="logo-link-footer2 ">
        <div className="WO-logo-link-footer2-1">
          <img className="sh-logo-img" src={logo} />
          <div className=" sh-btn-top">
            <p className="mb-0">Got To Top</p>
            <img src={arrowtop} />
          </div>
        </div>
        <ul className="WO-Menu2 mb-0">
          {links.slice(0, 6).map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={activeLink === link.path ? "WO-Active1" : ""}
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
        <p className="mb-0">© 2023 Nutritionist. All rights reserved.</p>
      </div>

    </div>

  );
}
