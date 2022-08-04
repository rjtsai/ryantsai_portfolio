import React, { useState } from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards(props) {
  const data = props.data;

  return (
    <div className="cards">
      <h1>{props.title}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              id="0"
              src={data[0].img}
              text={data[0].title}
              tools={data[0].tools}
              toggleDisplay={props.toggleDisplay}
            />
            <CardItem
              id="1"
              src={data[1].img}
              text={data[1].title}
              tools={data[1].tools}
              toggleDisplay={props.toggleDisplay}
            />
            <CardItem
              id="2"
              src={data[2].img}
              text={data[2].title}
              tools={data[2].tools}
              toggleDisplay={props.toggleDisplay}
            />
            <CardItem
              id="3"
              src={data[3].img}
              text={data[3].title}
              tools={data[3].tools}
              toggleDisplay={props.toggleDisplay}
            />
            <CardItem
              id="4"
              src={data[4].img}
              text={data[4].title}
              tools={data[4].tools}
              toggleDisplay={props.toggleDisplay}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
