import PropTypes from 'prop-types';
import { MovieCardWrapper } from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  return (
    <>
      {movie && (
        <MovieCardWrapper>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width="300"
              height="300"
            />
          ) : (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              alt={movie.title}
              width="300"
              height="300"
            />
          )}
          <div>
            <div>
              <h2>
                {movie.title}({movie.release_date.slice(0, 4)})
              </h2>
              <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            </div>
            <div>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <div>
              <h3>Genres</h3>
              <div>
                {movie.genres.map(genre => {
                  return <p key={genre.id}>{genre.name}</p>;
                })}
              </div>
            </div>
          </div>
        </MovieCardWrapper>
      )}
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};
