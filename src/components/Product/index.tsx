import { ArrowCircleLeft, HeartStraight } from '@phosphor-icons/react';
import { ReactNode, useState } from 'react';

import { Button } from '../Button';
// import { CountButton } from '../CountButton';
import { Divider } from '../Divider';
import { Image } from '../Image';

interface IProps {
  onClickToNavigate: () => void;
  children: ReactNode;
  src: string | undefined;
  alt: string | undefined;
  title: string | undefined;
  description: string | undefined;
  total: number | undefined;
  id: string | undefined;
  className: string | undefined;

  onAddToCart: () => void;
  onAddFavoriteProduct: (id: string) => void;
  onDelFavoriteProduct: () => void;
}

export const ProductDetail = ({
  alt,
  children,
  src,
  title,
  description,
  total,
  id,
  className,
  onClickToNavigate,
  onAddToCart,
  onAddFavoriteProduct,
  onDelFavoriteProduct,
}: IProps) => {
  const [isClickedBtn, setIsClicked] = useState(false);

  const handleAddFavoriteProduct = (productId: string) => {
    setIsClicked((prev) => !prev);
    onAddFavoriteProduct(productId);
  };

  const handleDelFavoriteProduct = () => {
    setIsClicked((prev) => !prev);
    onDelFavoriteProduct();
  };
  const handleNavigate = () => {
    onClickToNavigate();
  };

  const handleAddToCart = () => {
    onAddToCart();
  };

  return (
    <>
      <div className="w-full relative p-2">
        <div className=" flex flex-col items-center p-2 bg-back-banner bg-cove w-full h-96 rounded-md ">
          <div className="w-full  flex justify-between">
            <ArrowCircleLeft
              size={40}
              color="#57EB00"
              weight="thin"
              onClick={handleNavigate}
              className="cursor-pointer hover:brightness-100"
            />
          </div>
          <div className="relative w-full  flex items-center justify-center">
            <Image src={src} alt={alt} className="left-8 w-[28rem]  " />
          </div>
        </div>
        <HeartStraight
          className={`${className} mt-3 cursor-pointer -z-40 ${
            isClickedBtn ? 'hidden' : 'block'
          }`}
          size={32}
          weight="fill"
          onClick={() => handleAddFavoriteProduct(id!)}
        />
        <HeartStraight
          className={`${className} mt-3 cursor-pointer -z-40 ${
            !isClickedBtn ? 'hidden' : 'block'
          }`}
          size={32}
          weight="fill"
          onClick={handleDelFavoriteProduct}
        />
      </div>

      <div className="flex flex-col mt-[3.4rem] w-full p-2 mb-8 ">
        <h1 className="text-3xl font-semibold">{title} </h1>

        <Divider className="mt-6 mb-6 " />
        <p>{description} </p>
      </div>

      <div className="flex flex-col w-full p-2 ">
        <p>Quantidade</p>

        <div className="flex w-full justify-between items-center mt-4">
          {children}

          <div className="flex text-[40px] max-sm:text-[32px] text-primary-green-0">
            <span>R$</span>
            <p>{total}</p>
          </div>
        </div>
      </div>
      <Button
        className="rounded-md w-full mt-[3.25rem]"
        isSelected
        type="button"
        onClick={handleAddToCart}
      >
        Adicionar à Sacola
      </Button>
    </>
  );
};
