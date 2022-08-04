import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

function CardItem({ toggleDisplay, ...props }) {
  return (
    <>
      <li className="cards__item">
        <div className="card-wrapper">
          <div
            className="cards__item__link"
            onClick={() => toggleDisplay(props.id)}
          >
            <div className="cards__item__info">
              <img className="cards__item__img" src={props.src} />
            </div>
          </div>
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </li>
    </>
  );
}

export default CardItem;
