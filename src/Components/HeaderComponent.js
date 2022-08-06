import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  Nav,
  Collapse,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState({
    isNavOpen: false,
    isModalOpen: false,
  });

  let username = "";
  let password = "";
  let checkbox = false;

  function HandleLogin(event) {
    ToggleModal();
    alert(
      "Username: " +
        username.value +
        " Password: " +
        password.value +
        " Checkbox: " +
        checkbox.checked
    );
    event.preventDefault();
  }

  function ToggleNav() {
    return setToggle({ ...toggle, isNavOpen: !toggle.isNavOpen });
  }

  function ToggleModal() {
    return setToggle({ ...toggle, isModalOpen: !toggle.isModalOpen });
  }

  return (
    <div>
      <Modal isOpen={toggle.isModalOpen} toggle={ToggleModal}>
        <ModalHeader toggle={ToggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={HandleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                innerRef={(input) => (username = input)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                innerRef={(input) => (password = input)}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="remember"
                  innerRef={(input) => (checkbox = input)}
                />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
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
          <Collapse isOpen={toggle.isNavOpen} navbar>
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
          <Nav className="ml-auto info">
            <NavItem>
              <Button
                outline
                onClick={ToggleModal}
                style={{ color: "white", borderColor: "white" }}
              >
                <span
                  className="fa fa-sign-in fa-lg"
                  style={{ color: "white" }}
                ></span>{" "}
                Login
              </Button>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
