import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 25px;
  text-align: center;
  box-shadow: 1px 3px 3px #9b9898;
`;

export const LayoutNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
  color: #0e0d0d;
  &:not(:last-child) {
    margin-right: 50px;
  }
  &:hover,
  &:focus {
    color: #0f71c7;
    text-decoration: underline;
  }
`;
