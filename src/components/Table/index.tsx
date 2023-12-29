import { ReactNode } from 'react';

import { THead } from './THead';

interface IProps {
  children: ReactNode;
}

export const Table = ({ children }: IProps) => {
  return (
    <table className="w-full table-auto">
      <THead />
      <tbody className="bg-black">{children}</tbody>
    </table>
  );
};
