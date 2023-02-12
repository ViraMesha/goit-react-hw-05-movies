import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, CardWrapper, ProductName } from './FilmList.styled';

export const FilmsList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width="300"
            />
            <ProductName>{movie.title}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

FilmsList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
