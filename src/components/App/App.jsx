import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';

// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetail from 'pages/MovieDetail';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetail = lazy(() => import('../../pages/MovieDetail'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
