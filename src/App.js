import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Menu from "./Components/Menucomponent";
import { DISHES } from "./Shared/dishes";
import Staff from "./Components/StaffListComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div>
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> */}
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự V1.0</NavbarBrand>
          </div>
        </Navbar>
        {/* <Menu dishes={this.state.dishes} /> */}
        <Staff />
      </div>
    );
  }
}

export default App;
