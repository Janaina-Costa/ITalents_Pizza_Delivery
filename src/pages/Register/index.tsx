import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Divider } from '../../components/Divider';
import Input from '../../components/Input';
import { useValidateFields } from '../../hooks/useValidateFields';
import { userService } from '../../services/userService';
import { notifySuccess } from '../../utils/toast';

export const Register = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    image: '',
  });

  const navigate = useNavigate();
  const { register } = userService;
  const inputRef = useRef<HTMLInputElement>(null);
  const { errosField, setErrosFields, validation } = useValidateFields();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    validation(name, value);
    setErrosFields({ ...errosField, [name]: validation(name, value) });
  };

  const handleSubmitRegister = async (e: FormEvent) => {
    e.preventDefault();
    let validationErros: any = {};

    Object.keys(inputValue).forEach((key) => {
      const errorMessage = validation(key, inputValue[key]);

      validationErros = { ...validationErros, [key]: errorMessage };
    });
    setErrosFields(validationErros);

    if (Object.values(validationErros).every((err) => err === '')) {
      const response = await register(inputValue);
      if (response) {
        notifySuccess('Cadastro realizado com sucesso!');
        navigate('/login');
      }
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="bg-gray-900 max-w-[40rem] m-auto mt-28 p-8 flex justify-center items-center max-md:mt-0 max-md:h-screen overflow-hidden">
      <form
        className=" w-full flex flex-col justify-center items-center"
        onSubmit={handleSubmitRegister}
      >
        <p className="text-center mt-4 ">
          Preencha os campos para criar o seu cadastro.
        </p>
        <Divider />
        <div className="flex flex-col gap-8 w-full items-center justify-center mb-12">
          <div className="flex flex-col w-full">
            <Input
              placeholder="Digite seu nome"
              type="text"
              className={`bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none ${
                errosField.name ? 'border border-primary-red-1' : ''
              }`}
              onChange={handleChangeValue}
              value={inputValue.name}
              name="name"
              ref={inputRef}
              onBlur={handleBlur}
            />
            {errosField.name && (
              <p className="text-primary-red-1">{errosField.name} </p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <Input
              placeholder="Digite seu e-mail"
              type="email"
              className={`bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none ${
                errosField.email ? 'border border-primary-red-1' : ''
              }`}
              onChange={handleChangeValue}
              value={inputValue.email}
              name="email"
              onBlur={handleBlur}
            />
            {errosField.email && (
              <p className="text-primary-red-1">{errosField.email} </p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <Input
              placeholder="Digite sua senha"
              type="password"
              className={`bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none ${
                errosField.password ? 'border border-primary-red-1' : ''
              }`}
              onChange={handleChangeValue}
              value={inputValue.password}
              name="password"
              onBlur={handleBlur}
            />
            {errosField.password && (
              <p className="text-primary-red-1">{errosField.password} </p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <Input
              placeholder="Digite seu celular"
              type="tel"
              className={`bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none ${
                errosField.phone ? 'border border-primary-red-1' : ''
              }`}
              onChange={handleChangeValue}
              value={inputValue.phone}
              name="phone"
              onBlur={handleBlur}
            />
            {errosField.phone && (
              <p className="text-primary-red-1">{errosField.phone} </p>
            )}
          </div>

          <Input
            placeholder="Digite a URL da sua foto de perfil"
            type="text"
            className={`bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none `}
            onChange={handleChangeValue}
            value={inputValue.image}
            name="image"
            onBlur={handleBlur}
          />

          <Button
            isSelected
            type="submit"
            className="w-full max-w-full rounded-lg"
          >
            Cadastrar
          </Button>
        </div>

        <div>
          <p>
            Já tem cadastro?{' '}
            <span className="text-primary-red-1">
              <Link to="/login">Fazer login</Link>
            </span>{' '}
          </p>
        </div>
      </form>
    </div>
  );
};
