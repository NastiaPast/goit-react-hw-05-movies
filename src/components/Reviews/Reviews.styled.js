import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
`;

export const ReviewTitle = styled.h3`
text-transform: uppercase;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
`;

export const ReviewList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const ReviewListItem = styled.li`
  padding-bottom: 15px;
  border-bottom: 1px solid #c0bdbd;
`;

export const Author = styled.h4`
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: 500;
`;

export const Review = styled.p`
  line-height: 1.4;
`;

export const NoInfo = styled.p`
  margin: 30px auto 0 auto;
  padding: 20px;
  text-align: center;
  max-width: 500px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #f8f8f8;
`;
