import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../../services/fetchMovies';
import MovieList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { Text } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await fetchTrendMovies();
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Text>
          Sorry, we could not fetch the trending movies. Please try again later.
        </Text>
      ) : (
        <MovieList trendingMovies={movies} />
      )}
    </>
  );
};

export default Home;
