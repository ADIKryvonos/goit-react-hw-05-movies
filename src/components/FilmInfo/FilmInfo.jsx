import { Ul, Li, RLink } from './FilmInfo.styled';

const FilmInfo = () => {
  return (
    <Ul>
      <Li>
        <RLink to="cast">Cast</RLink>
      </Li>
      <Li>
        <RLink to="reviews">Reviews</RLink>
      </Li>
    </Ul>
  );
};

export default FilmInfo;
