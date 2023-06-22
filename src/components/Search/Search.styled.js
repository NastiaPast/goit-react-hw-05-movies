import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
  margin-right: 15px;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #9dc8f0;
  border: 1px solid #0d57aa;
  border-radius: 4px;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #508cc5;
    color: #ffffff;
  }
`;
