import { ReactComponent as Logo } from '../../Icon/Logo.svg';
import { ReactComponent as Phone } from '../../Icon/phone.svg';
import { ReactComponent as Search } from '../../Icon/search.svg';
import {
  Container,
  HeaderImg,
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
} from './Header.styled';

export default function HeaderEl() {
  return (
    <Container>
      <HeaderImg />
      <Header>
        <LogoLink to="/">
          <Logo width={80} height={80} fill="rgb(0, 102, 153)" />
          <Logotype>
            <SiteName>Всесвіт матраців</SiteName>
            <SiteTagline>Товари для зрорового сну</SiteTagline>
          </Logotype>
        </LogoLink>
        <SearchForm>
          <SearchInput type="text" placeholder="Пошук по сайту" />
          <SearchButtonSbmt type="submit">
            <Search width={20} fill="rgb(0, 102, 153)"></Search>
          </SearchButtonSbmt>
        </SearchForm>

        <CallbackForm>
          <ContactLinkPart type="button">
            <Phone width={60} height={60} fill="rgb(0, 102, 153)" />
            <CallbackStyled>
              <span>+38 096 111 11 11</span>
              <span>замовити дзвінок</span>
            </CallbackStyled>
          </ContactLinkPart>
        </CallbackForm>
      </Header>
    </Container>
  );
}
