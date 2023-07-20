import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  max-width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  background-color: var(--background-color);
`;
export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
  padding-top: 20px;
  margin-top: 0;
  color: var(--main-color);
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const InfoImage = styled.img`
  padding: 5px 10px;
  width: 120px;
  height: 90px;
  border-radius: 12%;
  object-fit: cover;
  margin: 0, auto;
`;
export const Filter = styled.select``;
export const Category = styled.h3`
  color: var(--main-color);
`;
export const Subcategory = styled(Link)`
  display: flex;
    flex-direction: column;

  text-decoration: none;
  color:var(--main-color)
  justify-content: center;
  align-items: center;
`;
