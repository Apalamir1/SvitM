import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { throttle } from 'lodash';
import { ReactComponent as Logo } from '../Icon/Logo.svg';
import { ReactComponent as Phone } from '../Icon/phone.svg';
import { ReactComponent as Mail } from '../Icon/mail.svg';
import { ReactComponent as Search } from '../Icon/search.svg';

import {
  Header,
  StyledLink,
  Container,
  Footer,
  LogoLink,
  Logotype,
  SiteName,
  SiteTagline,
  SearchForm,
  SearchInput,
  SearchButtonSbmt,
  LinkContainer,
  Navigation,
  Menu,
  ContactContainer,
  ContactLinkItem,
  ContactLinkPart,
} from './Layout.styled';

export const Layout = () => {
  // const button = document.querySelector('.scroll-btn');

  // button.addEventListener('click', scrollToTop);

  // const throttledScrollFunction = throttle(scrollFunction, 2000);

  // window.onscroll = function () {
  //   throttledScrollFunction();
  // };

  // function scrollFunction() {
  //   var scrollButton = document.querySelector('.scroll-btn');

  //   if (
  //     document.body.scrollTop > 500 ||
  //     document.documentElement.scrollTop > 500
  //   ) {
  //     scrollButton.style.bottom = '20px';
  //   } else {
  //     scrollButton.style.bottom = '-100px';
  //   }
  // }

  // function scrollToTop() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }
  return (
    <>
      <Navigation>
        <button type="button"> мова</button>
      </Navigation>
      <Container>
        <Header>
          <LogoLink to="/">
            <Logo width={60} hanging={60} fill="rgb(0, 102, 153)"></Logo>
            <Logotype>
              <SiteName>Web-siteName</SiteName>
              <SiteTagline>слоган</SiteTagline>
            </Logotype>
          </LogoLink>
          <SearchForm>
            <SearchInput type="text" placeholder="Пошук по сайту" />
            <SearchButtonSbmt type="submit">
              {' '}
              <Search width={20} hanging={20} fill="rgb(0, 102, 153)"></Search>
            </SearchButtonSbmt>
          </SearchForm>
          <ContactContainer>
            <ContactLinkItem>
              <ContactLinkPart href="mailto:info@devstudio.com">
                <Mail width={20} hanging={20} fill="rgb(0, 102, 153)"></Mail>
                info@devstudio.com
              </ContactLinkPart>
            </ContactLinkItem>
            <ContactLinkItem>
              <ContactLinkPart href="tel:+380961111111">
                <Phone width={20} hanging={20} fill="rgb(0, 102, 153)"></Phone>
                +38 096 111 11 11
              </ContactLinkPart>
            </ContactLinkItem>
          </ContactContainer>
        </Header>
      </Container>
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/faq">FAQ</StyledLink>
      </Menu>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Footer>
        <LinkContainer>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/products">Products</StyledLink>
          </li>
          <li>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </li>
        </LinkContainer>
      </Footer>
      {/* <button class="scroll-btn">up</button> */}
    </>
  );
};
