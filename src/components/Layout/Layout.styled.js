import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// ==========================================================================
// Top menu
export const Menu = styled.div`
  position: sticky;
  top: -1px;
  margin: 0;

  background-color: rgb(0, 102, 153);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 99;
`;
export const StyledLink = styled(NavLink)`
  height: 100%;
  margin-right: 10px;
  padding: 4px 8px;

  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 14px;
  font-family: Courier New, monospace;

  :hover,
  :focus {
    color: rgb(128, 128, 128);
  }

  &.active {
    color: rgb(255, 255, 255);
    border-left: 3px solid rgb(255, 255, 255);
    border-right: 3px solid rgb(255, 255, 255);
  }
`;
