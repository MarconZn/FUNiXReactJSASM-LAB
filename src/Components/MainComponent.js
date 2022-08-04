import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "../Shared/dishes";
import DishDetail from "./DishdetailComponent";
import Menu from "./MenuComponent";

function Main(props) {
  const [dishes, setDishes] = useState({
    dish: DISHES,
    selectedDish: null,
  });

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <div className="container">
        <Menu
          dishes={dishes.dish}
          onClick={(dish) => setDishes({ ...dishes, selectedDish: dish })}
        />
        <DishDetail
          dish={
            dishes.dish.filter((dish) => dish.id === dishes.selectedDish)[0]
          }
        />
      </div>
    </div>
  );
}

export default Main;
