import { reload } from './reload';

export const wait = (time: number) => {
  setTimeout(() => {
    reload();
  }, time);
};
