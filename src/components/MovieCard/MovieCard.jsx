import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Img,
  List,
  ListItem,
  Container,
  MovieWrapper,
  MovieTitle,
  MovieInfoSpan,
  MovieInfoText,
  Wrapper,
  InfoTitle,
  OptionLink,
} from './MovieCard.styled';
import { Loader } from 'components/Loader/Loader';

const POSTER_URL = 'https://image.tmdb.org/t/p/w400/';
const DEFAULT_POSTER_URL =
  'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;
  const releaseDate = new Date(release_date);
  const location = useLocation();

  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const voteScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'No rating yet';

  const posterUrl = poster_path
    ? `${POSTER_URL}${poster_path}`
    : `${DEFAULT_POSTER_URL}`;

  if (!title) {
    return <Loader />;
  }

  return (
    <>
      <Container>
        <Img src={posterUrl} alt={`${title} poster`} />
        <MovieWrapper>
          <MovieTitle>
            {title ?? 'Unknown'} ({releaseYear})
          </MovieTitle>
          <MovieInfoText>
            <MovieInfoSpan>User Score:</MovieInfoSpan>
            {voteScore}
          </MovieInfoText>
          <MovieInfoText>
            <MovieInfoSpan>Overview:</MovieInfoSpan> {overview}
          </MovieInfoText>
          {genres && genres.length > 0 && (
            <MovieInfoText>
              <MovieInfoSpan>Genres:</MovieInfoSpan>
              {genres.map(({ name }) => name).join(', ')}
            </MovieInfoText>
          )}
        </MovieWrapper>
      </Container>
      <Wrapper>
        <InfoTitle>Additional information</InfoTitle>
        <List>
          <ListItem>
            <OptionLink
              to="cast"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Cast
            </OptionLink>
          </ListItem>
          <ListItem>
            <OptionLink
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </OptionLink>
          </ListItem>
        </List>
      </Wrapper>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  }),
};

export default MovieCard;
