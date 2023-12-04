/* eslint-disable react/require-default-props */

import React, { InputHTMLAttributes, useState } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  hasIconLeft?: boolean;
  hasPassword?: boolean;
  onClickIconPassword?: () => void;
}

const Input: React.ForwardRefExoticComponent<
  IInput & React.RefAttributes<HTMLInputElement>
> = React.forwardRef<HTMLInputElement, IInput>(
  ({ hasIconLeft = false, className, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleInputFocus = () => {
      setIsFocused(true);
    };
    const handleInputBlur = () => {
      setIsFocused(false);
    };

    const handleClickIconPassword = () => {
      props.onClickIconPassword?.();
    };

    return (
      <div
        className="w-full flex justify-center items-center relative"
        style={props.style}
      >
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
        relative
        `}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={props.onChange}
          onKeyUp={props.onKeyUp}
          value={props.value}
          ref={ref}
        />
        {props.hasPassword ? (
          <button
            type="button"
            className="absolute right-4 bg-transparent border-none"
            onClick={handleClickIconPassword}
          >
            {props.children}{' '}
          </button>
        ) : (
          ''
        )}
      </div>
    );
  },
);
export default Input;
