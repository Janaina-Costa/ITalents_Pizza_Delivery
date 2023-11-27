/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit';
  isSelected: boolean;
  onClick?: (e: any) => void;
}

export const Button = ({
  children,
  onClick,
  className,
  type = 'button',
  isSelected,
  name,
  value,
}: IProps) => (
  <button
    className={`${
      isSelected
        ? 'bg-gradient-to-r from-primary-red-1 from-0% via-primary-red-0 via-[49%] to-primary-red-2 to-100% '
        : 'bg-gray-900 text-gray-600'
    }
    hover:brightness-200
    ease-in-out
    duration-300
    rounded-full
    text-white
    py-3 px-8 min-w-[157px]
    "
    ${className}
    `}
    onClick={onClick}
    type={type}
    name={name}
    value={value}
  >
    {children}
  </button>
);
