import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
  padding: 0;
  gap: 20px;
`;

export const Li = styled.li`
  list-style: none;
`;

export const RLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: orangered;
  padding: 8px 16px;
  border-radius: 4px;
`;
