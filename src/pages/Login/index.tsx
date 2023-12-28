import { Eye, EyeSlash } from '@phosphor-icons/react';
import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Divider } from '../../components/Divider';
import Input from '../../components/Input';
import { AuthContext } from '../../contexts/AuthContext';
import { useValidateFields } from '../../hooks/useValidateFields';
import { notifyErro } from '../../utils/toast';

export const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const [isHidePass, setIsHidePass] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { errosField, setErrosFields, validation } = useValidateFields();
  const navigate = useNavigate();

  const handleClickIconPassword = () => {
    setIsHidePass((prev) => !prev);
  };

  const { signIn } = useContext(AuthContext);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    validation(name, value);
    setErrosFields({ ...errosField, [name]: validation(name, value) });
  };

  const handleSubmitLogin = async (e: FormEvent) => {
    e.preventDefault();
    let validationErros: any = {};

    Object.keys(inputValue).forEach((key) => {
      const errorMessage = validation(key, inputValue[key]);

      validationErros = { ...validationErros, [key]: errorMessage };
    });
    setErrosFields(validationErros);

    if (Object.values(validationErros).every((err) => err === '')) {
      const response = await signIn(inputValue.email, inputValue.password);
      if (!response) {
        notifyErro('Login ou senha inválidos');
      }
    }
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  return (
    <div className="bg-gray-900 max-w-[40rem] m-auto mt-16 p-8 flex justify-center items-center max-md:mt-0 max-md:h-screen overflow-hidden mt-28">
      <form
        className=" w-full flex flex-col justify-center items-center"
        onSubmit={handleSubmitLogin}
      >
        <p className="text-center mt-4 ">
          Use suas credenciais para realizar o login.
        </p>
        <Divider />
        <div className="flex flex-col gap-8 w-full items-center justify-center mb-12">
          <div className="flex flex-col w-full">
            <Input
              placeholder="Digite seu e-mail"
              type="email"
              className={`bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none ${
                errosField.email ? 'border border-primary-red-1' : ''
              }`}
              value={inputValue.email}
              name="email"
              onChange={handleChangeValue}
              ref={inputRef}
              onBlur={handleBlur}
            />
            {errosField.email && (
              <p className="text-primary-red-1">{errosField.email} </p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <Input
              placeholder="Digite sua senha"
              type={isHidePass ? 'text' : 'password'}
              hasPassword
              className={`bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none ${
                errosField.password ? 'border border-primary-red-1' : ''
              }`}
              value={inputValue.password}
              name="password"
              onClickIconPassword={handleClickIconPassword}
              onChange={handleChangeValue}
              onBlur={handleBlur}
            >
              {isHidePass ? <EyeSlash /> : <Eye weight="fill" />}
            </Input>
            {errosField.password && (
              <p className="text-primary-red-1">{errosField.password} </p>
            )}
          </div>

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
    </div>
  );
};
