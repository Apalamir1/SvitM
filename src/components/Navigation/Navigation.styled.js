import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// ==========================================================================
// Navigation
export const Navigation = styled.nav`
  width: 100%;
  background-color: rgb(0, 102, 153);
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
