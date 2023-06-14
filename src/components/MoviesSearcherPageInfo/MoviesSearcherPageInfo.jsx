import { useLocation } from 'react-router-dom';
import { RLink, Ul, Li, P, HeroImg } from './MoviesSearcherPageInfo.styled';

const MoviesSearcherPageInfo = ({ searchFilm }) => {
  const location = useLocation();
  const img = 'https://image.tmdb.org/t/p/w500';
  // const noImage = '../../images/no-image.jpg';

  return (
    <Ul>
      {searchFilm.map(({ title, id, poster_path }) => (
        <Li key={id}>
          <RLink to={`${id}`} state={{ from: location }}>
            {poster_path ? (
              <img
                src={`${img}${poster_path}`}
                width="300px"
                height="420px"
                alt={title}
              />
            ) : (
              <HeroImg>No Image</HeroImg>
            )}
            <P>{title}</P>
          </RLink>
        </Li>
      ))}
    </Ul>
  );
};

export default MoviesSearcherPageInfo;
