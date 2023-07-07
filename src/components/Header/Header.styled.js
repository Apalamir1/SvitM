import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import HeaderImage from '../../images/header.jpg';
// ===========================================================================
// web-container
export const Container = styled.div`
  max-width: 1200px;

  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
`;

// =========================================================================
// header
export const Header = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px 0;
  margin-bottom: 10px;
`;
export const HeaderImg = styled.div`
  position: absolute;
  left: -1px;
  z-index: -1;
  height: 150px;
  width: 100%;
  background-image: url(${HeaderImage});
  opacity: 0.3;
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
