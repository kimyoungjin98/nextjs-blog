import Modal from '../modal/modal';
import ModalHeader from '../modal/modal-header/modal-header';
import styles from './login-modal.module.scss';

/* eslint-disable-next-line */
export interface LoginModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function LoginModal({ isOpen, setIsOpen }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalHeader>로그인</ModalHeader>
    </Modal>
  );
}

export default LoginModal;
