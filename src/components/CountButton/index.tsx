import { ChangeEvent } from 'react';

import { Button } from '../Button';
import Input from '../Input';

interface IProps {
  onClickPlus: () => void;
  onClickMinus: () => void;
  onChangeInput: (value: ChangeEvent<HTMLInputElement>) => void;
  counter: number;
}

export const CountButton = ({
  counter,
  onClickMinus,
  onClickPlus,
  onChangeInput,
}: IProps) => {
  const handleCountSum = () => {
    onClickPlus();
  };

  const handleCountSub = () => {
    onClickMinus();
  };

  const handleChangeInput = (value: ChangeEvent<HTMLInputElement>) => {
    onChangeInput(value);
  };

  return (
    <div className="flex gap-4 items-center border border-solid border-slate-800 m-0  h-[48px]">
      <Button
        isSelected={false}
        type="button"
        className="!min-w-[48px] !h-[48px] !p-0 hover:bg-gradient-to-r from-primary-red-1 from-0% via-primary-red-0 via-[49%] to-primary-red-2 to-100% rounded-l rounded-r-none "
        onClick={handleCountSub}
      >
        -
      </Button>

      <Input
        value={counter}
        className="w-[24px] bg-transparent border-none h-[48px] text-center !p-0"
        onChange={handleChangeInput}
      />

      <Button
        isSelected={false}
        type="button"
        className="!min-w-[48px] max-w-[48px] !h-[48px] !p-0 hover:bg-gradient-to-r from-primary-red-1 from-0% via-primary-red-0 via-[49%] to-primary-red-2 to-100% rounded-r rounded-l-none"
        onClick={handleCountSum}
      >
        +
      </Button>
    </div>
  );
};
