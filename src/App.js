import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Components/Menucomponent";
import { DISHES } from "./Shared/dishes";
import Staff from "./Components/StaffListComponent";
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} /> */}
          {/* Assignment Code */}
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
