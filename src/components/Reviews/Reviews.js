import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmsReviews } from 'api-service/api';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function getReviews() {
      try {
        const data = await fetchFilmsReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        alert('Error');
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 && <p>We don't have any reviews for the movie</p>}
      {reviews.length > 0 && (
        <div>
          {reviews.map(review => {
            return (
              <div key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Reviews;
