import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ICONS } from 'interface';

/* eslint-disable-next-line */
export interface ModalHeaderProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export function ModalHeader({ children, onClick }: ModalHeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <div className="px-4 py-3 flex justify-between items-center">
      <p>{children}</p>
      <img src={ICONS.CLOSE} onClick={onClick} />
    </div>,
    document.body
  );
}

export default ModalHeader;
