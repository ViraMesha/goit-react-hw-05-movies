import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { fetchPrimaryInformationAboutFilm } from 'api-service/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { BackLink } from 'components/BackLink/BackLink';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const locRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getMovieById() {
      try {
        const data = await fetchPrimaryInformationAboutFilm(movieId);
        setMovie(data);
      } catch (error) {
        alert('Error');
      }
    }
    getMovieById();
  }, [movieId]);

  return (
    <>
      <div>
        <BackLink to={locRef.current}>Go back</BackLink>
      </div>
      <MovieCard movie={movie} />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
