import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/fetchMovies';
import {
  Author,
  NoInfo,
  Review,
  ReviewTitle,
  ReviewList,
  ReviewListItem,
  Container,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <Container>
      <ReviewTitle>Reviews</ReviewTitle>
      {reviews.length ? (
        <ReviewList className="reviews-container">
          {reviews.map(({ id, author, content }) => (
            <ReviewListItem className="review-card" key={id}>
              <Author>Author: {author}</Author>
              <Review>{content}</Review>
            </ReviewListItem>
          ))}
        </ReviewList>
      ) : (
        <NoInfo>We don't have any reviews for this movie.</NoInfo>
      )}
    </Container>
  );
};
export default Reviews;
