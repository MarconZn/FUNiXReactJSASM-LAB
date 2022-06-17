import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import dateFormat, { masks } from "dateformat";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish !== null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComment(dish) {
    if (dish !== null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardTitle>Comment</CardTitle>
            <CardBody>
              <p>{dish.comments[0].comment}</p>
              <p>--{dish.comments[0].author}</p>
              <p>{dateFormat(dish.comments[0].date, "dd/mm/yyyy")}</p>
              <p>{dish.comments[1].comment}</p>
              <p>--{dish.comments[1].author}</p>
              <p>{dateFormat(dish.comments[1].date, "dd/mm/yyyy")}</p>
              <p>{dish.comments[2].comment}</p>
              <p>--{dish.comments[2].author}</p>
              <p>{dateFormat(dish.comments[2].date, "dd/mm/yyyy")}</p>
              <p>{dish.comments[3].comment}</p>
              <p>--{dish.comments[3].author}</p>
              <p>{dateFormat(dish.comments[3].date, "dd/mm/yyyy")}</p>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay body className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          {this.renderDish(this.state.selectedDish)}
          {this.renderComment(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;
