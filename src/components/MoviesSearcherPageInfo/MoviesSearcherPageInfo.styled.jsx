import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Li = styled.li`
  list-style: none;
`;

export const P = styled.p`
  width: 300px;
  color: black;
  font-weight: 500;
`;

export const HeroImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 420px;
  color: white;
  background-color: grey;
`;

export const RLink = styled(Link)`
  text-decoration: none;
`;
