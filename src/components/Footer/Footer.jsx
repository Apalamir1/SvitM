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
import { ReactComponent as Phone } from '../../Icon/phone.svg';
import { ReactComponent as Master } from '../../Icon/master-card.svg';
import { ReactComponent as Visa } from '../../Icon/visa.svg';
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
              <PhoneLink href="tel:+380961111111">
                <Phone fill="rgb(255, 255, 255)" width={40} />
                +38 096 111 11 11
              </PhoneLink>
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
