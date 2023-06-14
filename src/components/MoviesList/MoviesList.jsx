import { Ul, Li, H1, RLink, P, Icon } from './MoviesList.styled';

const MoviesList = ({ movies, title }) => {
  const img = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <H1>{title}</H1>
      <Ul>
        {movies.map(({ title, id, name, poster_path, vote_average }) => (
          <Li key={id}>
            <RLink to={`movies/${id}`}>
              <img src={`${img}${poster_path}`} width="320px" alt={name} />:
              <P>{title || name}</P>
              {/* (raiting: {Math.round(vote_average)}
              <Icon />) */}
            </RLink>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default MoviesList;
