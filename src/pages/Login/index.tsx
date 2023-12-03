import { ChangeEvent, useState } from 'react';

import { LoginForm } from '../../components/Forms/LoginForm';

export const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const handleChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, email: e.target.value });
  };
  const handleChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, password: e.target.value });
  };

  return (
    <div className="bg-gray-900 max-w-[40rem] m-auto mt-16 p-8 flex justify-center items-center max-md:mt-0 max-md:h-screen overflow-hidden">
      <LoginForm
        onChangeInputEmail={handleChangeInputEmail}
        onChangeInputPassword={handleChangeInputPassword}
        value={{
          email: inputValue.email,
          password: inputValue.password,
        }}
      />
    </div>
  );
};
