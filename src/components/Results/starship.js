import React from 'react';
import icon from './images/starship.svg';

const Film = props => (
  <li className="results__item">
    <h3 className="results__title">
      {props.item.name}
    </h3>
    <div
      className="results__bg"
      id={props.item.type}
    />
    <ul className="results__info">
      <li>Model <span>{props.item.model}</span> </li>
      <li>Manufacturer <span>{props.item.manufacturer}</span> </li>
      <li>Hyperdrive Rating <span>{props.item.hyperdrive_rating}</span> </li>
    </ul>
  </li>
);

export default Film;