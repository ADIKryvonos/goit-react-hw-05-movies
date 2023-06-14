import { useEffect, useState } from 'react';
import Searcher from 'components/Searcher/Searcher';
import { getSearchFilms } from 'services/GetMovie';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import MoviesSearcherPageInfo from 'components/MoviesSearcherPageInfo/MoviesSearcherPageInfo';

function Movies() {
  const [searchFilm, setSearchFilm] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetch = async () => {
      try {
        if (value === '') {
          return;
        }
        setLoading(true);
        const { results } = await getSearchFilms(value);
        setSearchFilm(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [value]);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <Searcher onSubmit={handleSubmit} />
      {error !== null && <div>Sorry, one more time!</div>}
      {loading ? (
        <Loader />
      ) : (
        <MoviesSearcherPageInfo searchFilm={searchFilm} />
      )}
    </>
  );
}

export default Movies;
