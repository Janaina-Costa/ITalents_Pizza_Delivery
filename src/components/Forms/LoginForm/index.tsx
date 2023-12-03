import { Eye, EyeSlash } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../../Button';
import { Divider } from '../../Divider';
import Input from '../../Input';

interface IProps {
  value: {
    email: string;
    password: string;
  };
  onChangeInputEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitLogin: (e: FormEvent) => void;
}

export const LoginForm = ({
  value,
  onChangeInputEmail,
  onChangeInputPassword,
  onSubmitLogin,
}: IProps) => {
  const [isHidePass, setIsHidePass] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClickIconPassword = () => {
    setIsHidePass((prev) => !prev);
  };

  const handleChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputEmail(e);
  };
  const handleChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputPassword(e);
  };
  const handleSubmit = (e: FormEvent) => {
    onSubmitLogin(e);
  };
  return (
    <form
      className=" w-full flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <p className="text-center mt-4 ">
        Use suas credenciais para realizar o login.
      </p>
      <Divider />
      <div className="flex flex-col gap-8 w-full items-center justify-center mb-12">
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
          value={value.email}
          onChange={handleChangeInputEmail}
        />
        <Input
          placeholder="Digite sua senha"
          type={isHidePass ? 'text' : 'password'}
          hasPassword
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
          value={value.password}
          onClickIconPassword={handleClickIconPassword}
          onChange={handleChangeInputPassword}
        >
          {isHidePass ? <EyeSlash /> : <Eye weight="fill" />}
        </Input>

        <Button
          isSelected
          type="submit"
          className="w-full max-w-full rounded-lg"
        >
          Entrar
        </Button>
      </div>

      <div>
        <p>
          Esqueceu sua senha?{' '}
          <span className="text-primary-red-1">
            <Link to="/recovery">Clique aqui</Link>
          </span>{' '}
        </p>
      </div>
      <Divider />

      <Button
        isSelected
        type="button"
        className="w-full max-w-full rounded-lg mb-8
        "
        onClick={() => navigate('/register')}
      >
        Quero me cadastrar
      </Button>
    </form>
  );
};
