import { useState, useEffect } from 'react';
import { getFilmCredits } from 'services/GetMovie';
import { useParams } from 'react-router-dom';
import { Ul } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { cast } = await getFilmCredits(id);
        const mainCast = cast.splice(0, 10);
        setCredits(mainCast);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);

  return (
    <div>
      <Ul>
        {credits.map(({ id, name, profile_path, character }) => {
          const imageSrc = `https://image.tmdb.org/t/p/w500${profile_path}`;

          return (
            <li key={id}>
              {profile_path === null ? (
                <img src="/assets/no-image.jpg" alt={name} width="150"></img>
              ) : (
                <img src={imageSrc} alt={name} width="150"></img>
              )}

              <h2>{name}</h2>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </Ul>
    </div>
  );
};

export default Cast;
