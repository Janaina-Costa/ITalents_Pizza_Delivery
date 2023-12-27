/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */

import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CountButton } from '../../components/CountButton';
import { ProductDetail } from '../../components/Product';
import { LoadingSpinner } from '../../components/Spinner';
import { AuthContext } from '../../contexts/AuthContext';
import { decrement, increment } from '../../features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { productService } from '../../services/productService';
import { userService } from '../../services/userSevice';
import { IProduct } from '../../types/interface/Product';
import { reload } from '../../utils/reload';

export const Product = () => {
  const { id } = useParams();

  const quantity = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [total, setTotal] = useState<number>();
  const [product, setProduct] = useState<IProduct>();
  const { getProductById } = productService;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { addFavoriteProduct, removeFavoriteProduct } = userService;
  const { userData } = useContext(AuthContext);

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
      reload();
    }, 500);
  };
  // TODO quando estiver com zero perguntar se quer remover o item da sacola
  const handleAddFavoriteProduct = async () => {
    if (!userData?._id || !product?._id) {
      return;
    }
    console.log(userData._id, product._id);

    const response = await addFavoriteProduct(userData._id, product?._id);
    if (response) {
      alert('Produto adicionado aos favoritos');
    }
  };

  const handleRemoveFavoriteProduct = async () => {
    if (!userData?._id || !product?._id) {
      return;
    }
    const response = await removeFavoriteProduct({
      id: userData?._id,
      productId: product._id,
    });
    if (response) {
      alert('Produto removido dos favoritos');
    }
  };

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

  useEffect(() => {
    if (!userData?._id || !product?._id) {
      return;
    }
  }, [product, userData]);

  return (
    <div className="bg-black max-w-[40rem] m-auto mt-16 p-8 flex flex-col items-center max-md:mt-0 max-md:h-screen overflow-hidden mt-28">
      <ProductDetail
        id={product?._id}
        alt={product?.name}
        src={product?.image}
        description={product?.description}
        title={product?.name}
        total={total}
        onClickToNavigate={redirectTo}
        onAddToCart={addToCart}
        onAddFavoriteProduct={handleAddFavoriteProduct}
        onDelFavoriteProduct={handleRemoveFavoriteProduct}
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
