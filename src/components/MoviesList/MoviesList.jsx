
import { Ul, Li, H1,RLink } from './MoviesList.styled';

const MoviesList = ({ movies, title }) => {
  console.log(movies);
  const img = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <H1>{title}</H1>
      <Ul>
        {movies.map(({ title, id, name, poster_path }) => (
          <Li key={id}>
            <RLink to={`movies/${id}`}>
              <img src={`${img}${poster_path}`} width="280px" alt="name" />
              <p>{title || name}</p>
            </RLink>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default MoviesList;
