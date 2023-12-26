/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CountButton } from '../../components/CountButton';
import { ProductDetail } from '../../components/Product';
import { LoadingSpinner } from '../../components/Spinner';
import { decrement, increment } from '../../features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { productService } from '../../services/productService';
import { IProduct } from '../../types/interface/Product';

export const Product = () => {
  const { id } = useParams();

  const quantity = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [total, setTotal] = useState<number>();
  const [product, setProduct] = useState<IProduct>();
  const { getProductById } = productService;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const redirectTo = () => {
    navigate('/');
  };

  const handleCountSum = () => {
    dispatch(increment());
  };

  const handleCountSub = () => {
    if (quantity <= 0) {
      return;
    }
    dispatch(decrement());
  };

  const addToCart = () => {
    const cart = [
      {
        ...product,
        quantity,
      },
    ];
    const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cartStorage) {
      cart.push(...cartStorage);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Produto adicionado ao carrinho');
      navigate('/');
      window.location.reload();
    }, 500);
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
    const totalValue = product.price * quantity;
    setTotal(totalValue);
  }, [quantity, product]);

  return (
    <div className="bg-black max-w-[40rem] m-auto mt-16 p-8 flex flex-col items-center max-md:mt-0 max-md:h-screen overflow-hidden mt-28">
      <ProductDetail
        alt={product?.name}
        src={product?.image}
        description={product?.description}
        title={product?.name}
        total={total}
        onClickToNavigate={redirectTo}
        onAddToCart={addToCart}
      >
        <CountButton
          counter={quantity}
          onClickMinus={handleCountSub}
          onClickPlus={handleCountSum}
        />
        {isLoading && <LoadingSpinner />}
      </ProductDetail>
    </div>
  );
};
