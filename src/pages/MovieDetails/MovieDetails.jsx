import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { fetchMovieById } from '../../services/fetchMovies';
import MovieCard from '../../components/MovieCard/MovieCard';
import { Button, Container } from './MovieDelails.styled';
import { Loader } from 'components/Loader/Loader';

const MovieDelails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setMovieDetails(movieData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <main>
      <Container>
        <Link to={location?.state?.from ?? '/'}>
          <Button type="button">
            <BsArrowLeftShort
              style={{ width: '30px', height: '30px', display: 'inline-block' }}
            />
            Go back
          </Button>
        </Link>
        <MovieCard movie={movieDetails} />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDelails;
