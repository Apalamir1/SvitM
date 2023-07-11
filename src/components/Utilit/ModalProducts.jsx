import { ReactComponent as X } from '../../Icon/x.svg';

import {
  Modal,
  CloseBtn,
  LinkContainer,
  LinkItem,
  StyledLink,
} from './Modal.stayled';

export default function ModalProducts({ onClose }) {
  return (
    <Modal>
      <CloseBtn onClick={onClose}>
        <X />
      </CloseBtn>
      <LinkContainer>
        <LinkItem>
          <StyledLink to="/products">Матраси</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/about">Супутні товари</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/about">Ліжка</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/about">Ламельні підставки</StyledLink>
        </LinkItem>
      </LinkContainer>
    </Modal>
  );
}
