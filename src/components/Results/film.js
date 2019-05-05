import React from 'react';
import icon from './images/film.svg';

const Film = props => (
  <li className="results__item">
    <h3 className="results__title">
      {props.item.name}
      <span> (Episode {props.item.episode_id})</span>
    </h3>
    <div
      className="results__bg"
      id={props.item.type}
    />
    <ul className="results__info">
      <li>Released <span>{props.item.release_date}</span> </li>
      <li>Directed by <span>{props.item.director}</span> </li>
      <li>Produced by <span>{props.item.producer}</span> </li>
    </ul>
  </li>
);

export default Film;