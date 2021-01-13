import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const KeyboardEncyclopediaCard = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.article.image}></Card.Img>
      <Card.Body>
        <Link to={props.article.link}>
          <Card.Title>{props.article.title}</Card.Title>
        </Link>
        <Card.Subtitle>{props.article.subtitle}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default KeyboardEncyclopediaCard;
