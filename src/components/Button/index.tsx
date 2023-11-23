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
  <button className={className} onClick={onClick} type={type}>
    {children}
  </button>
);
