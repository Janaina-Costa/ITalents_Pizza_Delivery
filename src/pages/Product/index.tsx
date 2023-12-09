/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */

import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CountButton } from '../../components/CountButton';
import { ProductDetail } from '../../components/Product';
import { productService } from '../../services/productService';
import { IProduct } from '../../types/Product';

export const Product = () => {
  const { id } = useParams();

  const [count, setCount] = useState<number>(1);
  const [total, setTotal] = useState<number>();
  const [product, setProduct] = useState<IProduct>();
  const { getProductById } = productService;

  const navigate = useNavigate();

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
    const setData = async () => {
      const response = await getProductById(id);
      if (!response) {
        return;
      }
      setProduct(response);
    };
    setData();
  }, [id, getProductById]);

  useEffect(() => {
    if (!product) {
      return;
    }
    const totalValue = product.price * count;
    setTotal(totalValue);
  }, [count, product]);

  return (
    <div className="bg-black max-w-[40rem] m-auto mt-16 p-8 flex flex-col items-center max-md:mt-0 max-md:h-screen overflow-hidden">
      <ProductDetail
        alt={product?.name}
        src={product?.image}
        description={product?.description}
        title={product?.name}
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
