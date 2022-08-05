import React, { useState } from "react";
import { DISHES } from "../Shared/dishes";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import DishDetail from "./DishdetailComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { COMMENTS } from "../Shared/comments";
import { PROMOTIONS } from "../Shared/promotions";
import { LEADERS } from "../Shared/leaders";

function Main(props) {
  const [dishes, setDishes] = useState({
    dish: DISHES,
    selectedDish: null,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
  });

  function DishWithId() {
    return (
      <DishDetail
        dish={
          dishes.dish.filter(
            (dish) => dish.id === Number(useParams().dishId)
          )[0]
        }
        comments={dishes.comments.filter(
          (comment) => comment.dishId === Number(useParams().dishId)
        )}
      />
    );
    // console.log(
    //   dishes.comments.filter(
    //     (comment) => comment.dishId === Number(useParams().dishId)
    //   )
    // );
  }

  console.log(dishes.selectedDish);

  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route
            path="/home"
            element={
              <Home
                dish={dishes.dish.filter((dish) => dish.featured)[0]}
                promotion={
                  dishes.promotions.filter((promo) => promo.featured)[0]
                }
                leader={dishes.leaders.filter((leader) => leader.featured)[0]}
              />
            }
          />
          <Route
            path="/menu"
            element={
              <Menu
                dishes={dishes.dish}
                onClick={(dish) => setDishes({ ...dishes, selectedDish: dish })}
              />
            }
          />
          <Route path="/menu/:dishId" element={<DishWithId />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
