import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

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

// ===========================================================================
// web-container
export const Container = styled.div`
  background-color: #fff;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;

  @media (min-width: 768px) {
    background-color: #000;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    background-color: rgb(0, 102, 153);
  }
`;

// =========================================================================
// header
export const Header = styled.header`
  background-color: #fff;

  width: 100%;
  height: 110px;
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
  width: calc(45% - 60px);
  background-color: rgb(255, 255, 255);
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

export const CallbackForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;

  padding-left: 10px;
  padding-right: 10px;
`;
export const ContactLinkPart = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgb(0, 102, 153);
`;
export const CallbackStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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

// ===========================================================================
// footer
export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: flex-end;

  justify-content: space-between;
  padding: 15px 0;
  margin-bottom: 16px;
  gap: 12px;
`;
export const Bg = styled.div`
  background-color: rgb(34, 87, 122);
  width: 100%;
`;
export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const ContactInfo = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`;

export const PhoneLink = styled(NavLink)`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
`;
