import { Link } from 'react-router-dom';

import { Button } from '../../Button';
import { Division } from '../../Division';
import Input from '../../Input';

export const LoginForm = () => {
  return (
    <form className="">
      <h1 className="mb-10">Use suas credenciais para realizar o login.</h1>
      <Division />
      <div>
        <Input />
        <Input />
        <Button isSelected type="submit">
          Entrar
        </Button>
      </div>

      <div>
        <p>
          Esqueceu sua senha?{' '}
          <span>
            <Link to="/recovery">Clique aqui</Link>
          </span>{' '}
        </p>
      </div>
      <Button isSelected type="button">
        Quero me cadastrar
      </Button>
    </form>
  );
};
