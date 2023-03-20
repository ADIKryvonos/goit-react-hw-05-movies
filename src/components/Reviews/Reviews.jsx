import { useState, useEffect } from 'react';
import { getFilmReviews } from 'services/GetMovie';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { results } = await getFilmReviews(id);
        if (results.length === 0) {
          throw new Error();
        }
        setReviews(results);
      } catch (error) {
        setError(error);
      }
    };
    fetch();
  }, [id]);

  if (error) {
    return <p>Sorry, we don't have any reviews for this film</p>;
  }
  return (
    <div>
      <ul>
        {reviews.map(({ id, content, author }) => {
          return (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>Character: {content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
