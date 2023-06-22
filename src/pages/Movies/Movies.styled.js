import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 0 40px 20px 40px;
`;

export const Title = styled.h2`
  margin-top: 25px;
  margin-bottom: 30px;
  font-size: 35px;
  font-weight: 500;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
`;

export const OptionLink = styled(Link)`
  color: #29557e;
  font-size: 20px;
  &:hover,
  &:focus {
    color: #0f71c7;
    border-bottom: 2px solid #0f71c7;
  }
`;
