import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat, { masks } from "dateformat";
import { baseUrl } from "../Shared/baseUrl";

function DishDetail(props) {
  // CHUC NANG RENDER THONG TIN MON AN
  function RenderDish(dish) {
    return (
      <div>
        <Card>
          <CardImg width="100%" src={baseUrl + dish.image} value={dish.name} />
          <CardBody>
            <CardTitle style={{ color: "black" }}>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  // CHUC NANG RENDER THONG TIN COMMENT
  function RenderComments(comments) {
    if (comments !== null) {
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    -- {comment.author},{" "}
                    {dateFormat(comment.date, "dd/mm/yyyy")}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-xs-12 col-md-6 m-1">
          {RenderDish(props.dish)}
        </div>
        <div className="col-xl-5 col-xs-12 col-md-5 m-1">
          {RenderComments(props.comments)}
        </div>
      </div>
    </div>
  );
}

export default DishDetail;
