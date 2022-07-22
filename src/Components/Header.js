import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggle,
  NavItem,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar color="primary">
        <NavbarBrand className="mr-auto" href="/">
          <img
            src="assets/images/logo.png"
            height="30"
            width="40"
            alt="Logo ung dung quan ly nhan vien"
          />
        </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink className="nav-link text-white h6" to="/nhanvien">
              <span className="fa fa-users fa-lg text-white mr-2"></span>
              Nhân viên
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link text-white h6" to="/bophan">
              <span className="fa fa-vcard-o fa-lg text-white mr-2"></span>
              Phòng ban
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link text-white h6" to="/luong">
              <span className="fa fa-money fa-lg text-white mr-2"></span>
              Bảng Lương
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
