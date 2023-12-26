import React from 'react';

interface IProps {
  children?: React.ReactNode;
  value: number;
}

export const QuantityButton = ({ children, value }: IProps) => {
  return (
    <div className="flex gap-4 items-center mt-2">
      <div className="flex gap-2 bg-gray-800 px-2 rounded-xl">
        <button type="button">-</button>
        <span>{value}</span>
        <button type="button">+</button>
      </div>
      {children}
    </div>
  );
};
