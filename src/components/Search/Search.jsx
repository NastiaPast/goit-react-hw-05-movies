import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { Button, Form, Input } from './Search.styled';

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    if (!query) {
      toast.error('Enter something in search line');
      return;
    }
    onSubmit(query);
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name='query'
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchMovies;
