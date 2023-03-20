import { Link, useLocation } from 'react-router-dom';
import {
  Button,
  Wrap,
  ImageWrap,
  Image,
  InfoWrap,
  Title,
  Raiting,
  H3,
  Text,
} from './MovieInfo.styled';

const MovieInfo = ({
  movie: {
    poster_path,
    title,
    name,
    vote_average,
    release_date,
    overview,
    genres = [],
    first_air_date,
  },
}) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const imageSrc = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <Wrap>
      <Link to={backLinkHref}>
        <Button type="button">Go back</Button>
      </Link>

      <ImageWrap>
        {poster_path ? (
          <Image src={imageSrc} alt={title || name} width="250px"></Image>
        ) : (
          <Image
            src="/assets/no-image.jpg"
            alt={title || name}
            width="250px"
          ></Image>
        )}
      </ImageWrap>
      <InfoWrap>
        <Title>
          {title}({release_date || first_air_date})
        </Title>
        <Raiting>User score: {vote_average}</Raiting>
        <H3>Overview</H3>
        <Text>{overview}</Text>
        <H3>Genres</H3>
        <Text>
          {genres.map(({ name }) => {
            return `${name} `;
          })}
        </Text>
      </InfoWrap>
    </Wrap>
  );
};

export default MovieInfo;
