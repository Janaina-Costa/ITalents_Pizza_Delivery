import delivery from '../../assets/delivery.svg';

export const ThankyouPage = () => {
  return (
    <div className="bg-black max-w-[40rem] m-auto mt-28 p-8 flex justify-center flex-col items-center max-md:mt-0 max-md:h-screen overflow-hidden">
      <h1 className="mb-4 text-lg"> Obrigada pela sua compra!</h1>
      <img src={delivery} alt="imagem de uma entregadora em uma moto" />
      <p className="mt-4 text-lg">Breve seu pedido chegará até você </p>
    </div>
  );
};
