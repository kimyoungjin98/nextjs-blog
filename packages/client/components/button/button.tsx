import { ReactNode } from "react";

/* eslint-disable-next-line */
export interface ButtonProps {
  type?: 'text' | 'solid';
  color?: 'primary' | 'danger' | 'warning' | 'success';
  children?:ReactNode;
  onClick?:()=>void;
}

export function Button(props: ButtonProps) {
  const setStyle = () => {
    const { type } = props;

    if (type === 'text' || !type) {
      return 'bg-transparent text-gray-700 hover:bg-gray-100';
    }
  };

  return (
    <button
	onClick={props.onClick}
      className={
        'text-sm px-2 py-1 rounded w-max h-max min-w-max outline-none select-none transition-all flex gap-2 items-center ' +
        setStyle()
      }
    >
      {props.children}
    </button>
  );
}

export default Button;
