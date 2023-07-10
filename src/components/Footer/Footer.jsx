import {
  Footer,
  Container,
  Bg,
  LinkContainer,
  StyledLink,
  LogoLink,
  Logotype,
  SiteName,
  SiteTagline,
  ContactInfo,
  PhoneLink,
} from './Footer.styled';
import { ReactComponent as Logo } from '../../Icon/Logo.svg';
import { ReactComponent as Kyivstar } from '../../Icon/Kyivstar.svg';
import { ReactComponent as Lifecell } from '../../Icon/lifecell.svg';

import { ReactComponent as Telegram } from '../../Icon/telegram.svg';
import { ReactComponent as Instagram } from '../../Icon/instagram.svg';
import { ReactComponent as Master } from '../../Icon/master-card.svg';
import { ReactComponent as Visa } from '../../Icon/visa.svg';
import { Link } from 'react-router-dom';
export default function FooterBar() {
  return (
    <Bg>
      <Container>
        <Footer>
          <LogoLink to="/">
            <Logo width={80} height={80} fill="rgb(255, 255, 255)" />
            <Logotype>
              <SiteName>Всесвіт матраців</SiteName>
              <SiteTagline>Товари для зрорового сну</SiteTagline>
            </Logotype>
          </LogoLink>
          <LinkContainer>
            <li>
              <StyledLink to="/technology">Технології</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">Оплата та доставка</StyledLink>{' '}
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
          </ContactInfo>
        </Footer>
      </Container>
    </Bg>
  );
}
