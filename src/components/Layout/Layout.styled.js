import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';
// ===========================================================================
// web-container
export const Container = styled.div`
  max-width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  background-color: rgb(255, 255, 255);
`;
// ==========================================================================
// Navigation
export const Navigation = styled.nav`
  width: 100%;
  background-color: rgb(0, 102, 153);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
// =========================================================================
// header
export const Header = styled.header`
  background-color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px 0;
  margin-bottom: 10px;
`;

export const LogoLink = styled(Link)`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;

  border-radius: 12%;
  padding-left: 15px;
  padding-right: 15px;
  height: 50%;
`;
export const Logotype = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;
export const SiteName = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
`;
export const SiteTagline = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
  color: rgb(0, 102, 153);
`;
export const SearchForm = styled.div`
  width: calc(50% - 50px);

  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(0, 102, 153);
  border-radius: 10px;
`;
export const SearchInput = styled.input`
  width: 90%;
  font-size: 12px;
  border: none;
  height: 20px;
  padding-top: 1px;
  padding-left: 10px;
  padding-right: 2px;
  padding-bottom: 1px;
  outline: none;
  box-shadow: none;
  :hover,
  :focus {
    color: rgb(128, 128, 128);
    border: none;
  }
`;
export const SearchButtonSbmt = styled.button`
  background: none;
  border: none;
`;
export const ContactContainer = styled.ul`
  margin-left: 10px;
  display: flex;
  flex-direction: row;
`;
export const ContactLinkItem = styled.li`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;

  padding-left: 15px;
  padding-right: 15px;
`;
export const ContactLinkPart = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgb(0, 102, 153);
`;
// ==========================================================================
// Top menu
export const Menu = styled.div`
  position: sticky;
  top: -1px;
  margin: 0;
  padding: 10px;
  background-color: rgb(0, 102, 153);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const StyledLink = styled(NavLink)`
  margin-right: 10px;
  padding: 4px 8px;
  border-radius: 6px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 400;
  font-size: 14px;
  font-family: Courier New, monospace;

  :hover,
  :focus {
    color: rgb(128, 128, 128);
  }

  &.active {
    color: rgb(255, 255, 255);
    border: 3px solid rgb(255, 255, 255);
  }
`;

// ===========================================================================
// footer
export const Footer = styled.footer`
  background-color: rgb(34, 87, 122);
  display: flex;
  align-content: flex-end;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px 0;
  margin-bottom: 16px;
  border-top: 2px solid rgb(0, 0, 0);
`;
export const LinkContainer = styled.ul`
  margin-left: 20px;
`;
