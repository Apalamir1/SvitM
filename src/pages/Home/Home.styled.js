import styled from '@emotion/styled';

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

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
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