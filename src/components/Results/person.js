import React from 'react';
import icon from './images/vader.svg';

const Person = props => (
  <li className="results__item">
    <h3 className="results__title">{props.item.name}</h3>
    <div
      className="results__bg"
      id={props.item.type}
    />
    <ul className="results__info">
      <li>Gender <span>{props.item.gender}</span></li>
      <li>Height <span>{props.item.height}cm</span> </li>
      <li>Weight <span>{props.item.mass}kg</span> </li>
    </ul>
  </li>
);

export default Person;