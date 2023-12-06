/* eslint-disable consistent-return */

import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CountButton } from '../../components/CountButton';
import { ProductDetail } from '../../components/Product';
import { itemsData } from '../../data/itemsData';

export const Product = () => {
  const { id } = useParams();

  const [count, setCount] = useState<number>(1);
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
  const redirectTo = () => {
    navigate('/');
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
  // TODO quando estiver com zero perguntar se quer remover o item da sacola

  useEffect(() => {
    if (!id) {
      return;
    }
    const price: number = Number(setData(id!)?.price.toFixed(2));
    setTotal(count * price);
  }, [count, id]);

  return (
    <div className="bg-black max-w-[40rem] m-auto mt-16 p-8 flex flex-col items-center max-md:mt-0 max-md:h-screen overflow-hidden">
      <ProductDetail
        alt={setData(id!)?.alt}
        src={setData(id!)?.src}
        description={setData(id!)?.description}
        title={setData(id!)?.title}
        total={total}
        onClickToNavigate={redirectTo}
      >
        <CountButton
          counter={count}
          onClickMinus={handleCountSub}
          onClickPlus={handleCountSum}
          onChangeInput={handleChangeInputCount}
        />
      </ProductDetail>
    </div>
  );
};
