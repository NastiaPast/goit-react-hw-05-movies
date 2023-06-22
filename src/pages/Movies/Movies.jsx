import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchMovieByName } from '../../services/fetchMovies';
import SearchMovies from '../../components/Search/Search';
import { List, Title, OptionLink, Section } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    const fetchMovie = async () => {
      try {
        const { results } = await fetchMovieByName(query);
        if (results.length === 0) {
          toast.dismiss();
          toast.error('Sorry, there are no movies matching your search query.');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };
    fetchMovie();
  }, [searchParams]);

  const handleSubmit = searchQuery => {
    if (searchQuery === query) {
      toast.error(`This word has already been searched for. Try another one.`);
      return;
    }
    setSearchParams({ query: searchQuery });
  };

  return (
    <main>
      <Section>
        <Title>Movies Page</Title>
        <SearchMovies onSubmit={handleSubmit} />
        <List>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <OptionLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </OptionLink>
            </li>
          ))}
        </List>
      </Section>
    </main>
  );
};

export default Movies;
