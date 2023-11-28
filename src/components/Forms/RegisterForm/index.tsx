import { Link } from 'react-router-dom';

import { Button } from '../../Button';
import { Divider } from '../../Divider';
import Input from '../../Input';

export const RegisterForm = () => {
  return (
    <form className=" w-full flex flex-col justify-center items-center">
      <p className="text-center mt-4 ">
        Preencha os campos para criar o seu cadastro.
      </p>
      <Divider />
      <div className="flex flex-col gap-8 w-full items-center justify-center mb-12">
        <Input
          placeholder="Digite seu nome"
          type="text"
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
        />
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
        />
        <Input
          placeholder="Digite sua senha"
          type="password"
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
        />
        <Input
          placeholder="Repita sua senha"
          type="password"
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
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
