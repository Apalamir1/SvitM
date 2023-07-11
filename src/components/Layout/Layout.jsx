import React, { useState, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Icon/Logo.svg';
import { ReactComponent as Info } from '../../Icon/info.svg';
import { ReactComponent as Menu } from '../../Icon/menu.svg';
import { ReactComponent as Phone } from '../../Icon/phone.svg';
import { ReactComponent as Search } from '../../Icon/search.svg';
import { ReactComponent as Kyivstar } from '../../Icon/Kyivstar.svg';
import { ReactComponent as Lifecell } from '../../Icon/lifecell.svg';

import { ReactComponent as Telegram } from '../../Icon/telegram.svg';
import { ReactComponent as Instagram } from '../../Icon/instagram.svg';
import { ReactComponent as Master } from '../../Icon/master-card.svg';
import { ReactComponent as Visa } from '../../Icon/visa.svg';

import ModalProducts from '../Utilit//ModalProducts';
import ModalInfo from '../Utilit/ModalInfo';

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
  Bg,
  Footer,
  FtrMob,
  FtrDesctop,
  LinkContainer,
  ContactInfo,
  PhoneLink,
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
      <div>
        <article>
          I am a Front-End developer looking for a full-time position in a
          company that's aimed at making both everyday life and business easier,
          more productive and user-friendly. I have basic knowledge of HTML,
          CSS, JavaScript, React and Node. I'm a hardworking and responsible
          person.I am a fast learner and ready for difficult tasks. Contacts:
          Phone: +380661162768 Email: o.zaitsev.work@gmail.com I am a Front-End
          developer looking for a full-time position in a company that's aimed
          at making both everyday life and business easier, more productive and
          user-friendly. I have basic knowledge of HTML, CSS, JavaScript, React
          and Node. I'm a hardworking and responsible person.I am a fast learner
          and ready for difficult tasks. Contacts: Phone: +380661162768 Email:
          o.zaitsev.work@gmail.com I am a Front-End developer looking for a
          full-time position in a company that's aimed at making both everyday
          life and business easier, more productive and user-friendly. I have
          basic knowledge of HTML, CSS, JavaScript, React and Node. I'm a
          hardworking and responsible person.I am a fast learner and ready for
          difficult tasks. Contacts: Phone: +380661162768 Email:
          o.zaitsev.work@gmail.com I am a Front-End developer looking for a
          full-time position in a company that's aimed at making both everyday
          life and business easier, more productive and user-friendly. I have
          basic knowledge of HTML, CSS, JavaScript, React and Node. I'm a
          hardworking and responsible person.I am a fast learner and ready for
          difficult tasks. Contacts: Phone: +380661162768 Email:
          o.zaitsev.work@gmail.com I am a Front-End developer looking for a
          full-time position in a company that's aimed at making both everyday
          life and business easier, more productive and user-friendly. I have
          basic knowledge of HTML, CSS, JavaScript, React and Node. I'm a
          hardworking and responsible person.I am a fast learner and ready for
          difficult tasks. Contacts: Phone: +380661162768 Email:
          o.zaitsev.work@gmail.com I am a Front-End developer looking for a
          full-time position in a company that's aimed at making both everyday
          life and business easier, more productive and user-friendly. I have
          basic knowledge of HTML, CSS, JavaScript, React and Node. I'm a
          hardworking and responsible person.I am a fast learner and ready for
          difficult tasks. Contacts: Phone: +380661162768 Email:
          o.zaitsev.work@gmail.com I am a Front-End developer looking for a
          full-time position in a company that's aimed at making both everyday
          life and business easier, more productive and user-friendly. I have
          basic knowledge of HTML, CSS, JavaScript, React and Node. I'm a
          hardworking and responsible person.I am a fast learner and ready for
          difficult tasks. Contacts: Phone: +380661162768 Email:
          o.zaitsev.work@gmail.com
        </article>
      </div>
      <Bg>
        <Container>
          <Footer>
            <FtrMob></FtrMob>
            <FtrDesctop>
              <LogoLink to="/">
                <Logo />
                <Logotype>
                  <SiteName>Matras_off</SiteName>
                  <SiteTagline>Товари для зрорового сну</SiteTagline>
                </Logotype>
              </LogoLink>

              <LinkContainer>
                <li>
                  <StyledLink to="/technology">Технології</StyledLink>
                </li>
                <li>
                  <StyledLink to="/about">Оплата та доставка</StyledLink>
                </li>

                <li>
                  <StyledLink to="/faq">Питпння та відповіді</StyledLink>
                </li>
                <li>
                  <StyledLink to="/about">Про нас</StyledLink>
                </li>
                <li>
                  <StyledLink to="/about">Контакти</StyledLink>
                </li>
              </LinkContainer>
              <LinkContainer>
                <li>
                  <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                  <StyledLink to="/products">Products</StyledLink>
                </li>
              </LinkContainer>

              <ContactInfo>
                <li>
                  <PhoneLink href="tel:+380637176894">
                    <Lifecell fill="rgb(255, 255, 255)" width={40} />
                    +38 063 717 68 94
                  </PhoneLink>
                </li>
                <li>
                  <PhoneLink href="tel:+380973924381">
                    <Kyivstar width={80} />
                    +38 097 392 43 81
                  </PhoneLink>
                </li>
                <li>
                  <LinkContainer>
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
                  </LinkContainer>
                </li>
                <li>
                  <Master width={60} />
                  <Visa width={60} />
                </li>
                <li>
                  <p>Mattress Universe © 2023</p>
                </li>
              </ContactInfo>
            </FtrDesctop>
          </Footer>
        </Container>
      </Bg>
      {showProductsModal && (
        <ModalProducts onClose={handleCloseProductsModal} />
      )}

      {showInfoModal && <ModalInfo onClose={handleCloseInfoModal} />}
      {showScrollButton && <ScrollBtn onClick={handleScrollToTop}>↑</ScrollBtn>}
    </>
  );
};
