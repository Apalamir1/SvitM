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
export const Image = styled.img`
  padding: 5px 10px;
  width: 120px;
  height: 90px;
  border-radius: 12%;
  object-fit: cover;
  margin: 0, auto;
`;
export const Post = styled.div`
  display: flex;
  align-items: center;
`;
export const Deco = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Emphasis = styled.span`
  font-weight: 700;
  color: rgb(0, 102, 153);
`;
