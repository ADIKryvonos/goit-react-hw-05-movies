import { useState, useEffect } from 'react';
import { getTrendFilms } from 'services/GetMovie';
import MoviesList from 'components/MoviesList/MoviesList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { results } = await getTrendFilms();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <MoviesList movies={movies} title={'Trending today'} />
    </>
  );
}

export default Home;
