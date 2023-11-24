/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit';
}

export const Button = ({
  children,
  onClick,
  className,
  type = 'button',
}: IProps) => (
  <button
    className={`${className},
    hover:brightness-200
    ease-in-out
    duration-300
    rounded-full
    text-white"`}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);
