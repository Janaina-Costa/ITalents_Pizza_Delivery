import { ChangeEvent, FormEvent, useState } from 'react';

import { RegisterForm } from '../../components/Forms/RegisterForm';

export const Register = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    photoUrl: '',
  });

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmitRegister = (e: FormEvent) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className="bg-gray-900 max-w-[40rem] m-auto mt-16 p-8 flex justify-center items-center max-md:mt-0 max-md:h-screen overflow-hidden">
      <RegisterForm
        value={{
          name: inputValue.name,
          email: inputValue.email,
          password: inputValue.password,
          confirmPassword: inputValue.confirmPassword,
          phone: inputValue.phone,
          photoUrl: inputValue.photoUrl,
        }}
        onChangeInputName={handleChangeValue}
        onChangeInputEmail={handleChangeValue}
        onChangeInputPassword={handleChangeValue}
        onChangeInputPhone={handleChangeValue}
        onChangeInputPhotoUrl={handleChangeValue}
        onSubmitRegister={handleSubmitRegister}
      />
    </div>
  );
};
