import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 25px;
`;

export const Img = styled.img`
  height: 600px;
  width: 400px;
  border-radius: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const MovieWrapper = styled.div`
  padding-top: 15px;
  width: 100%;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
`;

export const MovieInfoText = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
`;

export const MovieInfoSpan = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
`;

export const Wrapper = styled.div`
  margin-top: 15px;
  padding: 20px 0px;
  border-top: 1px solid #c0bdbd;
  border-bottom: 1px solid #c0bdbd;
`;

export const InfoTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
  margin-top: 25px;
  font-size: 18px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionLink = styled(Link)`
  margin-right: 5px;
  padding: 5px 15px;
  border: 1px solid #0d57aa;
  border-radius: 5px;
  background-color: #9dc8f0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-size: 16px;
  color: #000;
  &:hover,
  &:focus {
    background-color: #508cc5;
    color: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;
