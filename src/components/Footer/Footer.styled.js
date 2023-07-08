import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  max-width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 30px;
  padding-bottom: 0;
  margin-right: auto;
  margin-left: auto;
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
  color: rgb(255, 255, 255);
`;
export const SiteTagline = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
  color: rgb(255, 255, 255);
`;
export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
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
