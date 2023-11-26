import { IPropsItems } from '../../../types/interface/product';
import { Button } from '../../Button';

export const PromoItem = ({
  description,
  src,
  title,
  alt,
  price,
}: IPropsItems) => (
  <section className="flex justify-between w-full ">
    <section className="flex flex-col items-start justify-around pl-10 w-[665px]">
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

    <section className=" flex h-full items-center relative  ">
      <p className="bg-gradient-to-r from-primary-red-1 from-0% via-primary-red-0 via-[49%] to-primary-red-2 to-100% rounded-full px-8 text-xl font-bold w-32">
        R$ {price}
      </p>

      <img className="w-[400px] " src={src} alt={alt} />
    </section>
    <div />
  </section>
);
