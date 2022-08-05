import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Nav,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  function ToggleNav() {
    return setNavOpen(!navOpen);
  }
  return (
    <div>
      <Navbar dark expand="md" color="primary">
        <div className="container row">
          <NavbarToggler onClick={ToggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Ristorante Con Fusion"
            />
          </NavbarBrand>
          <Collapse isOpen={navOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Link className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
