import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { baseUrl } from "../Shared/baseUrl";

function Home(props) {
  function RenderCard(item) {
    if (item === undefined) {
      return <div></div>;
    } else {
      return (
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? (
              <CardSubtitle>{item.designation}</CardSubtitle>
            ) : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  }

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">{RenderCard(props.dish)}</div>
        <div className="col-12 col-md m-1">{RenderCard(props.promotion)}</div>
        <div className="col-12 col-md m-1">{RenderCard(props.leader)}</div>
      </div>
    </div>
  );
}

export default Home;
