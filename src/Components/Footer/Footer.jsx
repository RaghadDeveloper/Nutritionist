import "./Footer.css";
import logo from "../../assets/images/nav/Logo.png";

import arrowtop from "../../assets/images/footer/Button.png";
import emailImg from "../../assets/images/footer/email.png";
import phoneImg from "../../assets/images/footer/phone.png";
import locationImg from "../../assets/images/footer/location.png";
import { Link } from "react-router-dom";

export default function Footer({ email, phone, location }) {
  return (
    <div className="sh-footer">
      <div className="logo-link-footer d-flex">
        <img className="sh-logo-img" src={logo} alt="" />
        <div className="d-flex  align-items-center sh-btn-top">
          <span>Got To Top</span>
          <img src={arrowtop} alt="" />
        </div>
      </div>
      <div className="logo-link-footer d-flex">
        <ul className="d-flex  SH-ul-link">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/process">process</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="sh-footer-contact d-flex ">
        <div className="sh-info-contact d-flex  ">
          <div className="sh-info-email d-flex ">
            <img src={emailImg} alt="" />

            <p>{email}</p>
          </div>
          <div className="sh-info-phone d-flex">
            <img src={phoneImg} alt="" />
            <p>{phone}</p>
          </div>
          <div className="sh-info-location d-flex">
            <img src={locationImg} alt="" />
            <p>{location}</p>
          </div>
        </div>
        <div className="copy-right d-flex">
          <p>© 2023 Nutritionist. All rights reserved.</p>
        </div>
      </div>
    </div>
    // <div className="sh-footer ">
    //   <Navbar expand="lg" className="  bg-body-tertiary sh-Navbar">
    //     <Container fluid>
    //       <img className=" sh-img-logo" src={logo} alt="" />

    //         <Nav
    //           className="me-auto my-2 my-lg-0 -primary-text  SH-navLINKS"
    //           style={{ maxHeight: "100px" }}

    //         >
    //           <Nav.Link className="SH-LINK" href="/">
    //             Home
    //           </Nav.Link>
    //           <Nav.Link className="SH-LINK" href="/about">
    //             About
    //           </Nav.Link>
    //           <Nav.Link className="SH-LINK" href="/team">
    //             Team
    //           </Nav.Link>
    //           <Nav.Link className="SH-LINK" href="/process">
    //             Process
    //           </Nav.Link>
    //           <Nav.Link className="SH-LINK" href="/pricing">
    //             Pricing
    //           </Nav.Link>
    //           <Nav.Link className="SH-LINK" href="/blog">
    //             Blog
    //           </Nav.Link>
    //           <Nav.Link className="SH-LINK" href="/blog">
    //             Contact
    //           </Nav.Link>
    //         </Nav>
    //         <div className="d-flex  align-items-center sh-btn-top">
    //           <span>Got To Top</span>
    //           <img src={arrowtop} alt="" />
    //         </div>
    //     </Container>
    //   </Navbar>
    //   <div className="sh-footer-contact d-flex ">
    //     <div className="sh-info-contact d-flex  ">
    //       <div className="sh-info-email d-flex ">
    //         <img src={emailImg} alt="" />
    //         <p>{email}</p>
    //       </div>
    //       <div className="sh-info-phone d-flex">
    //         <img src={phoneImg} alt="" />
    //         <p>{phone}</p>
    //       </div>
    //       <div className="sh-info-location d-flex">
    //         <img src={locationImg} alt="" />
    //         <p>{location}</p>
    //       </div>
    //     </div>
    //     <div className="copy-right d-flex">
    //       <p>© 2023 Nutritionist. All rights reserved.</p>
    //     </div>
    //   </div>
    // </div>
  );
}
