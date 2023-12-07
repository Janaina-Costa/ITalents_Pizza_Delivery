import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegisterForm } from '../../components/Forms/RegisterForm';
import { userService } from '../../services/userSevice';

export const Register = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    image: '',
  });
  const navigate = useNavigate();
  const { register } = userService;

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmitRegister = async (e: FormEvent) => {
    e.preventDefault();
    const response = await register(inputValue);
    if (response) {
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    }
  };

  return (
    <div className="bg-gray-900 max-w-[40rem] m-auto mt-16 p-8 flex justify-center items-center max-md:mt-0 max-md:h-screen overflow-hidden">
      <RegisterForm
        value={{
          name: inputValue.name,
          email: inputValue.email,
          password: inputValue.password,
          phone: inputValue.phone,
          image: inputValue.image,
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
