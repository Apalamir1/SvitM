import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Modal = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  background-color: var(--background-color);

  width: 100%;
  height: 100%;
`;
export const CloseBtn = styled.button`
  position: absolute;

  top: 10px;
  right: 10px;
  background-color: var(--background-color);
  border: none;
  fill: var(--focus-color);
`;
export const StyledLink = styled(NavLink)`
  height: 100%;
  margin-right: 10px;
  padding: 4px 8px;
  border-radius: 6px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 14px;
  font-family: Courier New, monospace;

  :hover,
  :focus {
    color: rgb(128, 128, 128);
  }
`;
