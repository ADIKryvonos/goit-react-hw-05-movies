import { useEffect, useState } from 'react';
import Searcher from 'components/Searcher/Searcher';
import { getSearchFilms } from 'services/GetMovie';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

function Movies() {
  const [searchFilm, setSearchFilm] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('query') ?? '';
  const location = useLocation();

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
      <h2>Movies</h2>
      <Searcher onSubmit={handleSubmit} />
      {error !== null && <div>Sorry,one more time!</div>}
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {searchFilm.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Movies;
