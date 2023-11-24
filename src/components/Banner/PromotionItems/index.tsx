import { IPropsPromotion } from '../../../types/interface/promotions';
import { Button } from '../../Button';

export const PromoItem = ({
  description,
  src,
  title,
  alt,
}: IPropsPromotion) => (
  <div className="grid grid-cols-2 ">
    <div className="flex flex-col items-start justify-around pl-5">
      <div className="flex flex-col gap-7">
        <h1 className="text-6xl font-extrabold">{title}</h1>
        <p className="text-xl">{description} </p>
      </div>
      <div>
        <Button className="btn " type="button">
          Comprar
        </Button>
      </div>
    </div>
    <div className="w-full h-full  ">
      <img className="w-full h-full]" src={src} alt={alt} />
    </div>
    <div />
  </div>
);
