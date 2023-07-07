import { Navigation, StyledLink } from './Navigation.styled';

export default function NavigationBar() {
  return (
    <Navigation>
      <div>
        <StyledLink to="/about">Про нас</StyledLink>
        <StyledLink to="/about">Оплата та доставка</StyledLink>
      </div>
      <button> 🇺🇦 Українська</button>

      <button>🇷🇺 Русский</button>
    </Navigation>
  );
}
