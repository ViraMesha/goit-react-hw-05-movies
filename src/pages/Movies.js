import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { fetchFilmsByKeyword } from 'api-service/api';
import { SearchBox } from 'components/Searchbox/Searchbox';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const movieName = searchParams.get('query') ?? '';

  const handleFormSubmit = searchValue => {
    setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    async function getMoviesByKeyword() {
      if (movieName === '') {
        return;
      }
      try {
        const data = await fetchFilmsByKeyword(movieName);
        if (data.results.length > 0) {
          setMovies(data.results);
        }
      } catch (error) {
        alert('Error');
      }
    }
    getMoviesByKeyword();
  }, [movieName]);

  return (
    <main>
      <SearchBox onSubmit={handleFormSubmit} />
      {movies && <FilmsList movies={movies} />}
    </main>
  );
};

export default Movies;
