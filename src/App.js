import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Movies } from './Components/Movies';
import { MovieForm } from './Components/MovieForm';
import { Container } from 'semantic-ui-react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies')
      .then(response => response.json()
      .then(data => {setMovies(data.movies);}))
  }, []);

  return (
      <Container style={{ marginTop: 40 }}>
        <MovieForm onNewMovie={movie => setMovies(currentMovies => [...currentMovies, movie])} />
        <Movies movies={movies}/>
      </Container>
  );
}

export default App;
