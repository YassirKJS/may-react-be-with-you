import React from 'react';
import icon from './images/wookie.svg';

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
      <li>Designation <span>{props.item.designation}</span> </li>
      <li>Classification <span>{props.item.classification}</span> </li>
      <li>Language <span>{props.item.language}</span> </li>
    </ul>
  </li>
);

export default Film;