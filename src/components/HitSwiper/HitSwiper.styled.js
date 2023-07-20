import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Btn = styled.button`
  width: 80px;
  height: 40px;
  font-size: 14px;
  font-weight: 700;

  background-color: var(--main-color);
  border: none;
`;
export const Filter = styled.select`
  border: none;
  font-size: 14px;
  font-weight: 700;
  background-color: var(--background-color);
`;
export const List = styled.ul`
  padding-left: 0px;

  display: flex;
  width: 100%;
  height: 100%;

  justify-content: centr;
`;

export const ListItem = styled.li`
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
  background-color: var(--background-color);
  margin-top: 10px;
  padding: 2px;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid var(--main-color);
  border-radius: 4px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  :hover,
  :focus {
    color: #8f6f06;
  }

  ::before {
    display: flex;
    align-items: center;
  }
`;
export const ProductLink = styled(Link)`
  width: 100%;
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
