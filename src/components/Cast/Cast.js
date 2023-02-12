import { fetchCastInformation } from 'api-service/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function getCast() {
      try {
        const data = await fetchCastInformation(movieId);
        setCast(data.cast);
      } catch (error) {
        alert('Error');
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div>
      {cast && (
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                  width="150"
                />
                <h3>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
