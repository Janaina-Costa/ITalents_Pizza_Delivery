import { IPropsItems } from '../../../types/interface/promotions';
import { Button } from '../../Button';

export const PromoItem = ({
  description,
  src,
  title,
  alt,
  price,
}: IPropsItems) => (
  <section className="grid grid-cols-2 ">
    <section className="flex flex-col items-start justify-around pl-5">
      <div className="flex flex-col gap-7">
        <h1 className="text-6xl font-extrabold break-words w-11/12">{title}</h1>
        <p className="text-xl">{description} </p>
      </div>
      <div>
        <Button isSelected className="" type="button">
          Adicionar à sacola
        </Button>
      </div>
    </section>
    <section className="w-full h-full relative  ">
      <p className="bg-gradient-to-r from-primary-red-1 from-0% via-primary-red-0 via-[49%] to-primary-red-2 to-100% rounded-full px-8 absolute top-20 text-xl font-bold w-32">
        R$ {price}
      </p>
      <img className="w-full" src={src} alt={alt} />
    </section>
    <div />
  </section>
);
