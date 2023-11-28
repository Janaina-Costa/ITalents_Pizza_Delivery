import { Button } from '../../Button';
import { Divider } from '../../Divider';
import Input from '../../Input';

export const RecoverForm = () => {
  return (
    <form className=" w-full flex flex-col justify-center items-center">
      <div>
        <h1 className="text-center text-2xl font-semibold  mt-4 mb-8">
          Esqueceu sua senha?
        </h1>
        <p className="text-center">
          Preencha o campo com seu e-mail e receba as instruções necessárias
          para redefinir a sua senha.
        </p>
      </div>
      <Divider />
      <div className="flex flex-col gap-8 w-full items-center justify-center mb-12">
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          className="bg-transparent py-5 pl-4 w-full max-w-full rounded outline-none"
        />

        <Button
          isSelected
          type="submit"
          className="w-full max-w-full rounded-lg"
        >
          Enviar
        </Button>
      </div>
    </form>
  );
};
