/* eslint-disable react/require-default-props */
import { InputHTMLAttributes, useState } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  hasIconLeft?: boolean;
}

const Input = ({ hasIconLeft = false, className, ...props }: IInput) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="" style={props.style}>
      {hasIconLeft ? <div className="">{props.children}</div> : ''}
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${className} ${
          isFocused
            ? 'border border-solid border-primary-green-2'
            : 'border border-solid border-gray-500'
        }
        p-[.5rem] outline-none
        placeholder:text-base
        `}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        value={props.value}
      />
    </div>
  );
};
export default Input;
