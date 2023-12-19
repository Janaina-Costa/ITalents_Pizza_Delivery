/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Trash } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

import { Divider } from '../../components/Divider';
import { Image } from '../../components/Image';
import Input from '../../components/Input';
import { QuantityButton } from '../../components/QuantityButton';
import { IProduct } from '../../types/Product';

export const Cart = () => {
  const [productsCart, setProductsCart] = useState<IProduct[]>([]);

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setProductsCart(storageCart);
  }, []);
  return (
    <main className="relative grid grid-cols-2 gap-4 max-w-7xl max-md:grid-cols-1 mx-auto mt-28 bg-black ">
      <div className="p-4 ">
        <h1 className="text-2xl">Endereço da entrega</h1>
        <div className="flex flex-col mt-4">
          <Input
            id="zipCode"
            name="zipCode"
            required
            type="text"
            placeholder="CEP"
            // ref={inputRef}
            className="bg-transparent py-2 pl-4 w-full max-w-full rounded outline-none mb-4"
          />

          <Input
            id="street"
            name="street"
            required
            type="text"
            placeholder="Rua"
            // ref={inputRef}
            className="bg-transparent py-2 pl-4 w-full max-w-full rounded outline-none mb-4"
          />
          <div className="flex gap-3">
            <Input
              id="number"
              name="number"
              required
              type="text"
              placeholder="Nº"
              // ref={inputRef}
              className="bg-transparent py-2 pl-4 w-full max-w-full rounded outline-none mb-4"
            />

            <Input
              id="complement"
              name="complement"
              type="text"
              placeholder="Complemento"
              // ref={inputRef}
              className="bg-transparent py-2 pl-4 w-full max-w-full rounded outline-none mb-4"
            />
          </div>

          <Input
            id="neighborhood"
            name="neighborhood"
            required
            type="text"
            placeholder="Bairro"
            // ref={inputRef}
            className="bg-transparent py-2 pl-4 w-full max-w-full rounded outline-none mb-4"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col ">
        <h1 className="text-2xl">Resumo da compra</h1>
        {productsCart.map((product) => (
          <div className="flex justify-between" key={product._id}>
            <div className="flex gap-4 mt-4">
              <Image className="w-20 max-w-full" src={product.image} />
              <div className="flex flex-col">
                <p className="">{product.name}</p>
                <p className="">R$ {product.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <QuantityButton value={product.quantity!}>
                <Trash />
              </QuantityButton>
            </div>
          </div>
        ))}
        <Divider className="mb-8 mt-8" />
        <div className=" flex flex-col  gap-3">
          <div className="flex justify-between">
            Total <span>40,00</span>
          </div>
          <div className="flex justify-between">
            Taxa de entrega <span>5,00</span>
          </div>
          <div className="flex justify-between">
            Total+ entrega <span>45,00</span>
          </div>
        </div>
      </div>
    </main>
  );
};
