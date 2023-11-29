/* eslint-disable consistent-return */

import { ArrowCircleLeft, HeartStraight } from '@phosphor-icons/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '../../components/Button';
import { CountButton } from '../../components/CountButton';
import { Divider } from '../../components/Divider';
import { itemsData } from '../../data/itemsData';

export const Product = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>();

  const navigate = useNavigate();

  const setData = (idProduct: string) => {
    const getData = itemsData.map((item) =>
      item.items.find((c) => c.id === idProduct),
    );
    const data = getData.map((f) => f);

    if (data === undefined) {
      return;
    }

    return data[0] || data[1];
  };

  const handleFavoriteProduct = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleCountSum = () => {
    setCount((prev) => prev + 1);
  };

  const handleCountSub = () => {
    if (count <= 0) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  const handleChangeInputCount = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    const price: number = Number(setData(id!)?.price.toFixed(2));
    setTotal(count * price);
  }, [count, id]);

  return (
    <div className="bg-black max-w-[40rem] m-auto mt-16 p-8 flex flex-col items-center max-md:mt-0 max-md:h-screen overflow-hidden">
      <div className="w-full relative p-2">
        <div className=" flex flex-col items-center p-2 bg-back-banner bg-cove w-full h-96 rounded-md">
          <div className="w-full  flex justify-between">
            <ArrowCircleLeft
              size={40}
              color="#57EB00"
              weight="thin"
              onClick={() => navigate('/')}
              className="cursor-pointer hover:brightness-100"
            />
          </div>
          <img
            src={setData(id!)?.src}
            alt={setData(id!)?.alt}
            className="absolute top-10"
          />
        </div>
        <HeartStraight
          className="mt-3 cursor-pointer"
          size={32}
          color={isFavorite ? '#FF0000' : '#ffffff'}
          weight="fill"
          onClick={handleFavoriteProduct}
        />
      </div>

      <div className="flex flex-col mt-[3.4rem] w-full p-2 mb-8 ">
        <h1 className="text-3xl font-semibold">{setData(id!)?.title} </h1>

        <Divider className="mt-6 mb-6 " />
        <p>{setData(id!)?.description} </p>
      </div>

      <div className="flex flex-col w-full p-2 ">
        <p>Quantidade</p>

        <div className="flex w-full justify-between items-center mt-4">
          <CountButton
            counter={count}
            onClickMinus={handleCountSub}
            onClickPlus={handleCountSum}
            onChangeInput={handleChangeInputCount}
          />

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
      >
        Adicionar à Sacola
      </Button>
    </div>
  );
};
