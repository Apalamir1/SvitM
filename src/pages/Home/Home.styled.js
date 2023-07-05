import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  max-width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  background-color: rgb(255, 255, 255);
`;
export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
  color: rgb(0, 102, 153);
`;
export const List = styled.ul`
  padding-left: 0px;

  display: flex;
  width: 100%;
  heigth: 100%;

  justify-content: centr;
`;

export const ListItem = styled.li`
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
  background-color: rgb(255, 255, 255);
  margin-top: 10px;
  padding: 2px;
  font-size: 12px;
  font-weight: 400;
  font-family: 'Segoe UI';
  border: 3px solid rgb(96, 176, 140);
  border-radius: 12%;
  margin-bottom: 5px;
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
