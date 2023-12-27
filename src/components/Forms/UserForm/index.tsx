import { Pencil } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useEffect, useRef } from 'react';

import { Button } from '../../Button';
import { Divider } from '../../Divider';
import Input from '../../Input';

interface IProps {
  value: {
    name: string;
    email: string;
    password: string;
    phone: string;
    image: string;
  };
  isDisabled: boolean;
  onChangeInputName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputEmail: (e: ChangeEvent<HTMLInputElement>) => void;

  onChangeInputPhone: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputPhotoUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitRegister: (e: FormEvent) => void;
  onEditRegister: () => void;
}

export const UserForm = ({
  onChangeInputEmail,
  onChangeInputName,
  onEditRegister,
  onChangeInputPhone,
  onChangeInputPhotoUrl,
  onSubmitRegister,
  value,
  isDisabled = true,
}: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeInputName = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputName(e);
  };
  const handleChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputEmail(e);
  };

  const handleChangeInputPhone = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputPhone(e);
  };
  const handleChangeInputPhotoUrl = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputPhotoUrl(e);
  };
  const handleEditRegister = () => {
    onEditRegister();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmitRegister(e);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <form
        className=" w-full flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <Divider />
        <div className="flex flex-col gap-4 w-full items-center justify-center mb-12">
          <p className="text-center mt-4 text-lg font-bold">Dados pessoais</p>
          <Input
            placeholder="Nome"
            type="text"
            className={`bg-transparent  w-full max-w-full rounded outline-none ${
              isDisabled && 'border-none'
            } `}
            onChange={handleChangeInputName}
            value={value.name}
            name="name"
            ref={inputRef}
            disabled={isDisabled}
          />
          <Input
            placeholder="E-mail"
            type="email"
            className={`bg-transparent  w-full max-w-full rounded outline-none ${
              isDisabled && 'border-none'
            } `}
            onChange={handleChangeInputEmail}
            value={value.email}
            name="email"
            disabled={isDisabled}
          />

          <Input
            placeholder="Celular"
            type="tel"
            className={`bg-transparent  w-full max-w-full rounded outline-none ${
              isDisabled && 'border-none'
            } `}
            onChange={handleChangeInputPhone}
            value={value.phone}
            name="phone"
            disabled={isDisabled}
          />
          <Input
            placeholder=" URL da foto de perfil"
            type="text"
            className={`bg-transparent  w-full max-w-full rounded outline-none ${
              isDisabled && 'border-none'
            } `}
            onChange={handleChangeInputPhotoUrl}
            value={value.image}
            name="image"
            disabled={isDisabled}
          />
          {!isDisabled ? (
            <Button
              isSelected
              type="submit"
              className="w-full max-w-full rounded-lg"
            >
              Salvar alteração
            </Button>
          ) : (
            ''
          )}
        </div>
      </form>
      {isDisabled ? (
        <Button isSelected={false} type="button" onClick={handleEditRegister}>
          <div className="flex items-center justify-center gap-2">
            <span>
              <Pencil />
            </span>
            <span> Editar</span>
          </div>
        </Button>
      ) : (
        ''
      )}
    </>
  );
};
