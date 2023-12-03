import { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { LoginForm } from '../../components/Forms/LoginForm';
import { AuthContext } from '../../context/AuthContext';

export const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const { signIn } = useContext(AuthContext);

  const handleChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, email: e.target.value });
  };
  const handleChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, password: e.target.value });
  };

  const handleSubmitLogin = async (e: FormEvent) => {
    e.preventDefault();
    signIn(inputValue.email, inputValue.password);
  };

  return (
    <div className="bg-gray-900 max-w-[40rem] m-auto mt-16 p-8 flex justify-center items-center max-md:mt-0 max-md:h-screen overflow-hidden">
      <LoginForm
        onChangeInputEmail={handleChangeInputEmail}
        onChangeInputPassword={handleChangeInputPassword}
        onSubmitLogin={handleSubmitLogin}
        value={{
          email: inputValue.email,
          password: inputValue.password,
        }}
      />
    </div>
  );
};
