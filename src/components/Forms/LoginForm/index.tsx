import { Link } from 'react-router-dom';

import { Button } from '../../Button';
import { Divider } from '../../Divider';
import Input from '../../Input';

export const LoginForm = () => {
  return (
    <form className=" w-full flex flex-col justify-center items-center">
      <p className="text-center mt-4 ">
        Use suas credenciais para realizar o login.
      </p>
      <Divider />
      <div className="flex flex-col gap-8 w-full items-center justify-center mb-12">
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
        />
        <Input
          placeholder="Digite seu e-mail"
          type="password"
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
        />
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
      >
        Quero me cadastrar
      </Button>
    </form>
  );
};
