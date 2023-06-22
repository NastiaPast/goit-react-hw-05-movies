import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovieCast } from '../../services/fetchMovies';
import {
  CastTitle,
  CastInfo,
  CastList,
  CastListItem,
  CastName,
  NoInfo,
  Container,
  CastImg,
} from './Cast.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w200';
const DEFAULT_IMG = 'https://via.placeholder.com/200x300?text=No+Image';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <Container>
      <CastTitle>Cast</CastTitle>
      {movieCast.length ? (
        <CastList>
          {movieCast.map(({ profile_path, id, name, character }) => (
            <CastListItem className="cast-card" key={id}>
              {profile_path ? (
                <CastImg
                  src={`${BASE_URL}${profile_path}`}
                  alt={`${name} profile`}
                />
              ) : (
                <CastImg src={`${DEFAULT_IMG}`} alt={`${name} profile`} />
              )}

              <CastInfo>
                <CastName>{name}</CastName>
                <p>{character}</p>
              </CastInfo>
            </CastListItem>
          ))}
        </CastList>
      ) : (
        <NoInfo>We don't have any information about the cast.</NoInfo>
      )}
    </Container>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};

export default Cast;
