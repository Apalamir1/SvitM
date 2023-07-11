import { ReactComponent as X } from '../../Icon/x.svg';
import { Modal, CloseBtn, StyledLink } from './Modal.stayled';

export default function ModalInfo({ onClose }) {
  return (
    <Modal>
      <CloseBtn onClick={onClose}>
        <X />
      </CloseBtn>
      <ul>
        <li>
          <StyledLink to="/technology">Технології</StyledLink>
        </li>
        <li>
          <StyledLink to="/faq">Питпння та відповіді</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">Про нас</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">Оплата та доставка</StyledLink>
        </li>
      </ul>
    </Modal>
  );
}
