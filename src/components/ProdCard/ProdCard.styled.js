import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Filter = styled.select``;
export const ProductLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: centr;
  align-items: center;
  padding: 5px 10px;
  text-decoration: none;
  color: #000;
`;
export const Image = styled.img`
  padding: 5px 10px;
  width: 300px;
  border-radius: 12%;
  object-fit: cover;
  margin: 0, auto;
  margin-bottom: 20px;
`;
