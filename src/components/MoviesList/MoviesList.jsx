import { Link } from 'react-router-dom';

const MoviesList = ({ movies, title }) => {
  return (
    <ul>
      <h1>{title}</h1>
      {movies.map(({ title, id, name }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>
            <p>{title || name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
