import { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { LoginForm } from '../../components/Forms/LoginForm';
import { AuthContext } from '../../contexts/AuthContext';

export const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const { signIn } = useContext(AuthContext);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e: FormEvent) => {
    e.preventDefault();
    signIn(inputValue.email, inputValue.password);
  };

  return (
    <div className="bg-gray-900 max-w-[40rem] m-auto mt-16 p-8 flex justify-center items-center max-md:mt-0 max-md:h-screen overflow-hidden">
      <LoginForm
        onChangeInputEmail={handleChangeValue}
        onChangeInputPassword={handleChangeValue}
        onSubmitLogin={handleSubmitLogin}
        value={{
          email: inputValue.email,
          password: inputValue.password,
        }}
      />
    </div>
  );
};
