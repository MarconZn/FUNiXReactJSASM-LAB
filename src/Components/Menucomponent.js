import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from "./DishdetailComponent";

function Menu(props) {
  const [selectedDish, setselectedDish] = useState(null);

  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card onClick={() => props.onClick(dish.id)}>
          <CardImg width="100%" src={dish.image} value={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <div className="row">{menu}</div>
    </div>
  );
}

export default Menu;
