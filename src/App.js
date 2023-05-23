import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Doctor Strange',
      description: 'In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg.jpg',
      rating: 5,
    },
    {
      title: 'doctor strange multiverse of madness',
      description: 'Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg',
      rating: 5,
    },
    // Add more movies as needed
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRateChange = (event) => {
    setRatingFilter(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= Number(ratingFilter)
  );

  const addMovie = () => {
    const newMovie = {
      title: 'New Movie',
      description: 'Description of New Movie',
      posterURL: 'https://example.com/poster.jpg',
      rating: 4.2,
    };

    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <h1>React Hooks Checkpoint
        movie app
      </h1>
      <Filter
        title={titleFilter}
        rate={ratingFilter}
        handleTitleChange={handleTitleChange}
        handleRateChange={handleRateChange}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={addMovie}>Add Movie</button>
    </div>
  );
};

export default App;
