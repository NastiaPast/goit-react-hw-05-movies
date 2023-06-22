import PropTypes from 'prop-types';
import { Section, OptionLink, Title, List } from './MovieList.styled';

const MovieList = ({ trendingMovies }) => {
  return (
    <Section>
      <Title>Trending today</Title>
      <List>
        {trendingMovies.map(({ id, title }) => (
          <li key={id}>
            <OptionLink to={`/movies/${id}`}>{title}</OptionLink>
          </li>
        ))}
      </List>
    </Section>
  );
};

export default MovieList;

MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
