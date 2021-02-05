import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014
};

ReactDOM.render(
    <App
      name={promoMovie.name}
      genre={promoMovie.genre}
      releaseDate={promoMovie.releaseDate}
    />,
    document.querySelector(`#root`)
);
