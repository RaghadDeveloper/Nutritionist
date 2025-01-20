import "./NavBar.css";
// import { Link } from 'react-router-dom';
import Abstract from "../../assets/images/nav/Abstract Design 1.png";
import Abstract2 from "../../assets/images/nav/Abstract Design 2.png";
import cricketball from "../../assets/images/nav/cricket ball.png";
import logo from "../../assets/images/nav/Logo.png";
import icone from "../../assets/images/nav/Icon.png";

import rightarrow from "../../assets/images/nav/right arrow.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export default function NavBar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img className=" SH-Abstract-left" src={Abstract} alt="" />
          <div className="navInfo">
            <img className="SH-cricketball" src={cricketball} alt="" />
            <p>Join Our Personalized Nutrition Demo For Free</p>
            <img className="SH-rightarrow" src={rightarrow} alt="" />
          </div>

          <img className=" SH-Abstract-right" src={Abstract2} alt="" />
        </div>
      </nav>
      <Navbar expand="lg" className="  bg-body-tertiary sh-Navbar">
        <Container fluid>
          <img className=" sh-img-logo" src={logo} alt="" />
          {/* <img src={icone} alt="" /> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 -primary-text  SH-navLINKS"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="SH-LINK-LIGHT" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="SH-LINK" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="SH-LINK" href="/team">
                Team
              </Nav.Link>
              <Nav.Link className="SH-LINK" href="/process">
                Process
              </Nav.Link>
              <Nav.Link className="SH-LINK" href="/pricing">
                Pricing
              </Nav.Link>
              <Nav.Link className="SH-LINK" href="/blog">
                Blog
              </Nav.Link>
            </Nav>
            <Form action="">
              <Button className="sh-nav-btn" variant="outline-success">
                Contact Us
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
{
  /* 
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
      </ul> */
}
