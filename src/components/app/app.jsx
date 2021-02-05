import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = ({name, releaseDate, genre}) => (
  <Main
    name={name}
    genre={genre}
    releaseDate={releaseDate}
  />
);


App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
};

export default App;
