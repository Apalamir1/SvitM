import { ReactComponent as X } from '../../Icon/x.svg';
import { ReactComponent as Mobile } from '../../Icon/mobile.svg';
import { ReactComponent as OldPhone } from '../../Icon/oldphone.svg';

import { ReactComponent as Telegram } from '../../Icon/telegram.svg';
import { ReactComponent as Instagram } from '../../Icon/instagram.svg';
import {
  Modal,
  CloseBtn,
  StyledLink,
  SocialTitle,
  SocialInfo,
  SocialItem,
  InstaLink,
  TeleLink,
  LinkContainer,
  LinkItem,
} from './Modal.stayled';

export default function ModalInfo({ onClose }) {
  return (
    <Modal>
      <CloseBtn onClick={onClose}>
        <X />
      </CloseBtn>
      <LinkContainer>
        <LinkItem>
          <StyledLink to="/technology">Технології</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/faq">Питпння та відповіді</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/about">Про нас</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/about">Оплата та доставка</StyledLink>
        </LinkItem>
      </LinkContainer>
      <LinkContainer>
        <LinkItem>
          <StyledLink href="tel:+380637176894">
            <Mobile />
            +38 063 717 68 94
          </StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink href="tel:+380973924381">
            <OldPhone />
            +38 097 392 43 81
          </StyledLink>
        </LinkItem>
      </LinkContainer>
      <SocialTitle>Ми в соціальних мережах:</SocialTitle>
      <SocialInfo>
        <SocialItem>
          <InstaLink href="https://www.instagram.com/matras_off/">
            <Instagram />
          </InstaLink>
        </SocialItem>
        <SocialItem>
          <TeleLink href="https://t.me/matrassoff">
            <Telegram />
          </TeleLink>
        </SocialItem>
      </SocialInfo>
    </Modal>
  );
}
