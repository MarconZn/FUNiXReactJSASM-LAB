import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DishDetail from "./DishdetailComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { baseUrl } from "../Shared/baseUrl";
import { DishSliceActions } from "../Redux/Store";

function Main(props) {
  // GAN BIEN CHO HOOK DISPATCH
  const dispatch = useDispatch();

  // LAY DU LIEU LEADERS
  useEffect(() => {
    return async () => {
      const getData = async () => {
        const response = await fetch(`${baseUrl}leaders`);
        if (!response.ok) {
          throw new Error("Fetch features data fail!!!");
        }
        const data = await response.json();
        return data;
      };
      try {
        const LeadersData = await getData();
        dispatch(DishSliceActions.inputLeaders(LeadersData));
      } catch (error) {
        console.log("Fetch features data fail!!!");
      }
    };
  }, []);

  // LAY DU LIEU PROMOTIONS
  useEffect(() => {
    return async () => {
      const getData = async () => {
        const response = await fetch(`${baseUrl}promotions`);
        if (!response.ok) {
          throw new Error("Fetch promotions data fail!!!");
        }
        const data = await response.json();
        return data;
      };
      try {
        const PromotionsData = await getData();
        dispatch(DishSliceActions.inputPromotions(PromotionsData));
      } catch (error) {
        console.log("Fetch promotions data fail!!!");
      }
    };
  }, []);

  // LAY DU LIEU COMMENTS
  useEffect(() => {
    return async () => {
      const getData = async () => {
        const response = await fetch(`${baseUrl}comments`);
        if (!response.ok) {
          throw new Error("Fetch comments data fail!!!");
        }
        const data = await response.json();
        return data;
      };
      try {
        const CommentsData = await getData();
        dispatch(DishSliceActions.inputComments(CommentsData));
      } catch (error) {
        console.log("Fetch comments data fail!!!");
      }
    };
  }, []);

  // LAY DU LIEU DISHES
  useEffect(() => {
    return async () => {
      const getData = async () => {
        const response = await fetch(`${baseUrl}dishes`);
        if (!response.ok) {
          throw new Error("Fetch dishes data fail!!!");
        }
        const data = await response.json();
        return data;
      };
      try {
        const DishesData = await getData();
        dispatch(DishSliceActions.inputDishes(DishesData));
      } catch (error) {
        console.log("Fetch dishes data fail!!!");
      }
    };
  }, []);

  // GOI DU LIEU SAU KHI FETCH DATA
  const Dishes = useSelector((state) => state.dishes);
  const Comments = useSelector((state) => state.comments);
  const Promotions = useSelector((state) => state.promotions);
  const Leaders = useSelector((state) => state.leaders);

  // GAN BIEN CHO DATA
  const dishes = {
    dish: Dishes,
    comments: Comments,
    promotions: Promotions,
    leaders: Leaders,
  };

  function AddFeedback(event) {
    const newFeedback = {
      date: new Date().toJSON(),
      ...event.newFeedback,
    };

    fetch(`${baseUrl}feedback`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newFeedback),
    }).then((res) => {
      if (res.ok) {
        alert("Thanks for your feedback!!!");
      }
    });
  }

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
  }

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
          <Route path="/menu" element={<Menu dishes={dishes.dish} />} />
          <Route path="/menu/:dishId" element={<DishWithId />} />
          <Route path="/contactus" element={<Contact onAdd={AddFeedback} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
