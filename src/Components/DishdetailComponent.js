import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat, { masks } from "dateformat";

function DishDetail(props) {
  // CHUC NANG RENDER THONG TIN MON AN
  function RenderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} value={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
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
        <div className="col-12 col-md-5 m-1">
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

  return props.dish === undefined ? (
    <div></div>
  ) : (
    <div className="container">
      <div className="row">
        {RenderDish(props.dish)}
        {RenderComments(props.dish.comments)}
      </div>
    </div>
  );
}

export default DishDetail;
