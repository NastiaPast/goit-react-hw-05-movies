import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 30px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid #0d57aa;
  border-radius: 5px;
  min-width: 100px;
  background-color: #9dc8f0;
  font-size: 16px;
  &:hover,
  &:focus {
    background-color: #508cc5;
    color: #ffffff;
  }
`;
