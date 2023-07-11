import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';
// ==========================================================================
// Navigation
export const Navigation = styled.nav`
  width: 100%;
  background-color: var(--bg-color-accent);
  position: fixed;
  top: 0;
  left: 0;
  @media (min-width: 768px) {
    position: static;
    background-color: #fff;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    background-color: rgb(0, 102, 153);
  }
`;
export const MobileBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const MobileMenuBtn = styled.button`
  padding-top: 5px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  background-color: var(--main-color);
  fill: var(--focus-color);
  :hover,
  :focus {
    fill: var(--bg-color-accent);
    background-color: var(--focus-color);
  }
`;

export const NavLinkContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    background-color: #fff;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    background-color: rgb(0, 102, 153);
  }
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
  background-color: var(--background-color);
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 52px;
  border-bottom: 8px solid var(--bg-color-accent);

  @media (min-width: 768px) {
    padding: 0;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
// =========================================================================
// header
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    width: 100%;
    height: 110px;

    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 15px 0;
    margin-bottom: 10px;
  }
`;
export const LogoLink = styled(Link)`
  fill: var(--focus-color);

  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  @media (min-width: 1200px) {
    margin-left: 10px;

    font-size: 18px;
    font-weight: bold;

    padding-left: 15px;
    padding-right: 15px;
    height: 50%;
  }
`;
export const Logotype = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;
export const SiteName = styled.h4`
  color: var(--focus-color);

  margin-top: 0;
  margin-bottom: 0;
`;
export const SiteTagline = styled.p`
  display: none;
  color: var(--font-color);

  @media (min-width: 1200px) {
    display: block;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 14px;
  }
`;
export const SearchForm = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--focus-color);
  border-radius: 10px;
  order: 1;
  width: 100%;
  background-color: var(--background-color);
  @media (min-width: 768px) {
    order: 0;
    margin: 0;
  }
  @media (min-width: 1200px) {
    width: calc(45% - 60px);
  }
`;
export const SearchInput = styled.input`
  background-color: var(--background-color);
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
    color: var(--focus-color);
    font-weight: bold;
    border: none;
  }
`;
export const SearchButtonSbmt = styled.button`
  fill: var(--focus-color);
  background: none;
  border: none;
`;

export const CallbackForm = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 10px;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 14px;
    font-weight: bold;

    padding-left: 10px;
    padding-right: 10px;
  }
`;
export const ContactLinkPart = styled.button`
  fill: var(--focus-color);
  border: none;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--focus-color);
  padding: 0;
`;
export const CallbackStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
// ==========================================================================
// Top menu
export const TopMenu = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    position: sticky;
    top: -1px;
    margin: 0;

    background-color: rgb(0, 102, 153);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 99;
  }
`;

// ===========================================================================
// ScrollButton
export const ScrollBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--bg-color-accent);
  color: #fff;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;

  :hover {
    opacity: 1;
  }
`;
