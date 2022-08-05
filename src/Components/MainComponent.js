import React, { useState } from "react";
import { DISHES } from "../Shared/dishes";
import { Route, Routes, Navigate } from "react-router-dom";
import DishDetail from "./DishdetailComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";

function Main(props) {
  const [dishes, setDishes] = useState({
    dish: DISHES,
    selectedDish: null,
  });

  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/menu"
            element={
              <Menu
                dishes={dishes.dish}
                onClick={(dish) => setDishes({ ...dishes, selectedDish: dish })}
              />
            }
          />
        </Routes>

        <DishDetail
          dish={
            dishes.dish.filter((dish) => dish.id === dishes.selectedDish)[0]
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
