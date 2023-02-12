import { useState, useEffect } from 'react';
import { fetchTrendingFilms } from 'api-service/api';
import { FilmsList } from 'components/FilmsList/FilmsList';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getTrendingFilms() {
      try {
        const data = await fetchTrendingFilms();
        setMovies(data.results);
      } catch (error) {
        setError('Error');
      }
    }
    getTrendingFilms();
  }, []);

  return (
    <main>
      <h1 style={{ marginBottom: '20px' }}>Trending today</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {movies.length > 0 && <FilmsList movies={movies} />}
    </main>
  );
};

export default Home;
