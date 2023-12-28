/* eslint-disable react/require-default-props */

import React, { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  hasIconLeft?: boolean;
  hasPassword?: boolean;
  onClickIconPassword?: () => void;
}

const Input: React.ForwardRefExoticComponent<
  IInput & React.RefAttributes<HTMLInputElement>
> = React.forwardRef<HTMLInputElement, IInput>(
  ({ hasIconLeft = false, className, disabled = false, ...props }, ref) => {
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
          className={`${className} outline-none border border-gray-500 focus:outline-none ring-primary-green-1 transition duration-500 focus:ring-1 resize-none
        p-[.5rem] outline-none
        placeholder:text-base
        relative
        `}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onKeyUp={props.onKeyUp}
          value={props.value}
          name={props.name}
          checked={props.checked}
          ref={ref}
          disabled={disabled}
          required={props.required}
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
