import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmInfo } from 'services/GetMovie';
import MovieInfo from 'components/MovieDetail/MovieInfo';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const results = await getFilmInfo(id);
        setMovie(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  return (
    <>
      {error && <div>Sorry, smth wrone! Try again</div>}
      {loading ? <Loader /> : <MovieInfo movie={movie} error={error} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetail;
