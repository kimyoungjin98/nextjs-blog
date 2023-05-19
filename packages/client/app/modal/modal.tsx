import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { TransitionGroup } from 'react-transition-group';

/* eslint-disable-next-line */
export interface ModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export function Modal({ isOpen, children, setIsOpen }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) {
    return null;
  }

  const dismiss = () => {
    setIsOpen(false);
  };

  return createPortal(
    <TransitionGroup className={isOpen ? 'fade-in' : 'fade-out'}>
      <dialog className="relative flex justify-center items-center w-full h-full">
        <div
          className="fixed inset-0 w-full h-full bg-black/80 cursor-pointer"
          onClick={dismiss}
        ></div>
        <div className="bg-white rounded z-50 w-max h-max min-w-[30rem] min-h-[30rem] fixed">
          {children}
        </div>
      </dialog>
    </TransitionGroup>,
    document.body
  );
}

export default Modal;
