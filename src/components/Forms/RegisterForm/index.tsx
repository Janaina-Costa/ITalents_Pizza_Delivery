import { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../Button';
import { Divider } from '../../Divider';
import Input from '../../Input';

interface IProps {
  value: {
    name: string;
    email: string;
    password: string;
    phone: string;
    photoUrl: string;
  };
  onChangeInputName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputPassword: (e: ChangeEvent<HTMLInputElement>) => void;

  onChangeInputPhone: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputPhotoUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitRegister: (e: FormEvent) => void;
}

export const RegisterForm = ({
  onChangeInputEmail,
  onChangeInputName,
  onChangeInputPassword,
  onChangeInputPhone,
  onChangeInputPhotoUrl,
  onSubmitRegister,
  value,
}: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeInputName = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputName(e);
  };
  const handleChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputEmail(e);
  };
  const handleChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputPassword(e);
  };
  const handleChangeInputPhone = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputPhone(e);
  };
  const handleChangeInputPhotoUrl = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputPhotoUrl(e);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmitRegister(e);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <form
      className=" w-full flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <p className="text-center mt-4 ">
        Preencha os campos para criar o seu cadastro.
      </p>
      <Divider />
      <div className="flex flex-col gap-8 w-full items-center justify-center mb-12">
        <Input
          placeholder="Digite seu nome"
          type="text"
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
          onChange={handleChangeInputName}
          value={value.name}
          name="name"
          ref={inputRef}
        />
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
          onChange={handleChangeInputEmail}
          value={value.email}
          name="email"
        />
        <Input
          placeholder="Digite sua senha"
          type="password"
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
          onChange={handleChangeInputPassword}
          value={value.password}
          name="password"
        />

        <Input
          placeholder="Digite seu celular"
          type="tel"
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
          onChange={handleChangeInputPhone}
          value={value.phone}
          name="phone"
        />
        <Input
          placeholder="Digite a URL da sua foto de perfil"
          type="text"
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
          onChange={handleChangeInputPhotoUrl}
          value={value.photoUrl}
          name="photoUrl"
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
  );
};
