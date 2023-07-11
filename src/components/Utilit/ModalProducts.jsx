import { Link } from 'react-router-dom';
import { ReactComponent as X } from '../../Icon/x.svg';
import { Modal, CloseBtn } from './Modal.stayled';

export default function ModalProducts({ onClose }) {
  return (
    <Modal>
      <CloseBtn onClick={onClose}>
        <X />
      </CloseBtn>
      <ul>
        <li>
          <Link to={'/about'}>Про нас</Link>
        </li>
        <li>
          <Link to={'/about'}>Про нас</Link>
        </li>
        <li>
          <Link to={'/about'}>Про нас</Link>
        </li>
        <li>
          <Link to={'/about'}>Про нас</Link>
        </li>
      </ul>
    </Modal>
  );
}
