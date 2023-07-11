import React, { useState, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Icon/Logo.svg';
import { ReactComponent as Info } from '../../Icon/info.svg';
import { ReactComponent as Menu } from '../../Icon/menu.svg';
import { ReactComponent as Phone } from '../../Icon/phone.svg';
import { ReactComponent as Search } from '../../Icon/search.svg';
// import { ReactComponent as Kyivstar } from '../../Icon/Kyivstar.svg';
// import { ReactComponent as Lifecell } from '../../Icon/lifecell.svg';

// import { ReactComponent as Telegram } from '../../Icon/telegram.svg';
// import { ReactComponent as Instagram } from '../../Icon/instagram.svg';
// import { ReactComponent as Master } from '../../Icon/master-card.svg';
// import { ReactComponent as Visa } from '../../Icon/visa.svg';

import ModalProducts from '../Utilit//ModalProducts'; // Компонент модального вікна з переліком товарів
import ModalInfo from '../Utilit/ModalInfo'; // Компонент модального вікна з посиланнями на інформаційні сторінки

import {
  Navigation,
  MobileBar,
  NavLinkContainer,
  StyledLink,
  Header,
  LogoLink,
  Logotype,
  SiteName,
  SiteTagline,
  SearchForm,
  SearchInput,
  SearchButtonSbmt,
  CallbackForm,
  ContactLinkPart,
  CallbackStyled,
  TopMenu,
  ScrollBtn,
  MobileMenuBtn,
  Container,
} from './Layout.styled';

export const Layout = () => {
  const [showProductsModal, setShowProductsModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductsModal = () => {
    setShowProductsModal(true);
  };

  const handleCloseProductsModal = () => {
    setShowProductsModal(false);
  };

  const handleOpenInfoModal = () => {
    setShowInfoModal(true);
  };

  const handleCloseInfoModal = () => {
    setShowInfoModal(false);
  };

  return (
    <>
      <Navigation>
        <MobileBar>
          <MobileMenuBtn onClick={handleOpenInfoModal}>
            <Info />
          </MobileMenuBtn>
          <MobileMenuBtn onClick={handleOpenProductsModal}>
            <Menu />
          </MobileMenuBtn>
        </MobileBar>
        <NavLinkContainer>
          <StyledLink to="/about">Про нас</StyledLink>
          <StyledLink to="/about">Оплата та доставка</StyledLink>
        </NavLinkContainer>

        {/* <button> 🇺🇦 Українська</button>

        <button>🇷🇺 Русский</button> */}
      </Navigation>

      <Container>
        <Header>
          <LogoLink to="/">
            <Logo />
            <Logotype>
              <SiteName>Matras_off</SiteName>
              <SiteTagline>Товари для зрорового сну</SiteTagline>
            </Logotype>
          </LogoLink>
          <SearchForm>
            <SearchInput type="text" placeholder="Пошук по сайту" />
            <SearchButtonSbmt type="submit">
              <Search></Search>
            </SearchButtonSbmt>
          </SearchForm>

          <CallbackForm>
            <ContactLinkPart type="button">
              <Phone />
              <CallbackStyled>
                <span>+38 063 717 68 94</span>
                <span>замовити дзвінок</span>
              </CallbackStyled>
            </ContactLinkPart>
          </CallbackForm>
        </Header>
      </Container>
      <TopMenu>
        <StyledLink to="/products">Матраси</StyledLink>
        <StyledLink to="/technology">Технології</StyledLink>
        <StyledLink to="/faq">Питпння та відповіді</StyledLink>
      </TopMenu>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      {/* <div>
        <div>
          <footer>
            <Link to="/">
              <Logo width={80} height={80} fill="rgb(255, 255, 255)" />
              <div>
                <span>Всесвіт матраців</span>
                <span>Товари для зрорового сну</span>
              </div>
            </Link>
            <ul>
              <li>
                <Link to="/technology">Технології</Link>
              </li>
              <li>
                <Link to="/about">Оплата та доставка</Link>{' '}
              </li>

              <li>
                <Link to="/faq">Питпння та відповіді</Link>
              </li>
              <li>
                <Link to="/about">Про нас</Link>
              </li>
              <li>
                <Link to="/about">Контакти</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="tel:+380637176894">
                  <Lifecell fill="rgb(255, 255, 255)" width={40} />
                  +38 063 717 68 94
                </Link>
              </li>
              <li>
                <Link href="tel:+380973924381">
                  <Kyivstar width={80} />
                  +38 097 392 43 81
                </Link>
              </li>
              <li>
                <ul>
                  Ми в соціальних мережах:
                  <li>
                    <a href="https://www.instagram.com/matras_off/">
                      <Instagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/matrassoff">
                      <Telegram />
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Master width={60} />
                <Visa width={60} />
              </li>
              <li>
                <p>Mattress Universe © 2023</p>
              </li>
            </ul>
          </footer>
        </div>
      </div> */}
      {showProductsModal && (
        <ModalProducts onClose={handleCloseProductsModal} />
      )}

      {showInfoModal && <ModalInfo onClose={handleCloseInfoModal} />}
      {showScrollButton && <ScrollBtn onClick={handleScrollToTop}>↑</ScrollBtn>}
    </>
  );
};
