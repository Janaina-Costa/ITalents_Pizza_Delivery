/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { MapPinLine, Trash } from '@phosphor-icons/react';
import axios from 'axios';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Divider } from '../../components/Divider';
import { Image } from '../../components/Image';
import Input from '../../components/Input';
import { QuantityButton } from '../../components/QuantityButton';
import { AuthContext } from '../../contexts/AuthContext';
import { USER_DATA } from '../../hooks/useAuth';
import { cartService } from '../../services/cartService';
import { orderService } from '../../services/orderService';
import { userService } from '../../services/userSevice';
import { IProduct } from '../../types/interface/Product';
import { IAdressUser } from '../../types/interface/User';

export const ADDRESS_DATA = JSON.parse(localStorage.getItem('address') || '{}');
export const CART_DATA = JSON.parse(localStorage.getItem('cart') || '[]');

export const Cart = () => {
  const { createAddress } = userService;
  const { createCart } = cartService;
  const { createOrder } = orderService;
  const navigate = useNavigate();

  const { userData } = useContext(AuthContext);
  const [productsCart, setProductsCart] = useState<IProduct[]>([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [purchaseTotal, setPurchaseTotal] = useState(0);
  const [addressIsFilled, setAddressIsFilled] = useState('');
  const [address, setAddress] = useState<IAdressUser>({
    cep: '',
    street: '',
    complement: '',
    number: '',
    neighborhood: '',
  });
  const [showFormAddress, setShowFormAddress] = useState<boolean>(false);
  const deliveryTax = 5;
  const { id } = USER_DATA;

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement> | any) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const resumeAddress = userData?.addresses.find(
    (addressId) => addressId._id === addressIsFilled,
  );
  const dataStorage = {
    street: resumeAddress?.street,
    number: resumeAddress?.number,
    complement: resumeAddress?.complement,
    neighborhood: resumeAddress?.neighborhood,
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement> | any) => {
    setAddressIsFilled(e.target.value);
    localStorage.setItem('address', JSON.stringify(dataStorage));
  };

  const getAddress = async () => {
    const response = await axios.get(
      `https://viacep.com.br/ws/${address.cep}/json`,
    );
    if (response) {
      setAddress({
        ...address,
        street: response.data.logradouro,
        neighborhood: response.data.bairro,
      });
    }
  };

  const saveAddress = async () => {
    try {
      const response = await createAddress(id, address);
      if (response) {
        alert('Endereço criado com sucesso');
        setAddress({
          cep: '',
          street: '',
          complement: '',
          number: '',
          neighborhood: '',
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sendOrder = async () => {
    const cart = productsCart.map((product) => {
      return {
        id: product._id,
        quantity: product.quantity,
      };
    });
    const cartInfo = {
      products: cart,
      totalPrice: purchaseTotal,
      deliveryValue: deliveryTax,
    };

    const response = await createCart(cartInfo);

    if (response) {
      const order = {
        products: response.products,
        totalPrice: response.totalPrice,
        deliveryValue: response.deliveryValue,
        orderCompleted: true,
      };

      const responseOrder = await createOrder(order);
      if (responseOrder) {
        alert('Order created with success');
        localStorage.removeItem('cart');
        navigate('/');
      }
    }
  };

  const removeProduct = (productId: string) => {
    const productStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    if (productStorage.length > 0) {
      const filterProduct = productStorage.filter(
        (product: IProduct) => product._id !== productId,
      );
      localStorage.setItem('cart', JSON.stringify(filterProduct));
      setProductsCart(filterProduct);
    }
  };

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setProductsCart(storageCart);
  }, []);

  useEffect(() => {
    const totalCart = productsCart.reduce((acc, product) => {
      return acc + product.price * product.quantity!;
    }, 0);
    setTotalProduct(totalCart);
    setPurchaseTotal(totalCart + deliveryTax);
  }, [productsCart]);

  if (!userData) {
    return;
  }
  return (
    <main className="relative grid grid-cols-2 gap-4 max-w-7xl max-md:grid-cols-1 mx-auto mt-28 bg-black ">
      <div className="p-4 ">
        {userData?.addresses?.length > 0 && (
          <div className="flex flex-col gap-4 mb-6">
            <h1 className="text-2xl">Selecione o endereço de entrega</h1>
            <select
              name="address-selected"
              id="address-selected"
              className="bg-transparent py-2 px-4 w-full max-w-full rounded outline-none border border-gray-500 focus:outline-none ring-primary-green-1 transition duration-500 focus:ring-1 resize-none mb-4 "
              onChange={handleChangeSelect}
            >
              {userData.addresses.map((add: IAdressUser) => (
                <option
                  className="flex flex-col justify-between gap-4 mb-6  bg-black"
                  value={`${add._id}`}
                  key={add._id}
                >
                  <span>{add.street}, </span>
                  <span>{add.number} </span>
                </option>
              ))}
            </select>
          </div>
        )}
        <Divider />
        <div className="flex items-center  gap-2 hover:text-primary-green-1 ease-in-out duration-300">
          <MapPinLine size={28} />
          <h1
            className="text-1xl underline cursor-pointer "
            onClick={() => setShowFormAddress((prev) => !prev)}
          >
            Adicionar novo endereço de entrega
          </h1>
        </div>
        {showFormAddress && (
          <>
            <div className="flex flex-col mt-4">
              <Input
                id="zipCode"
                name="cep"
                required
                type="text"
                placeholder="CEP"
                value={address.cep}
                onChange={handleChangeValue}
                // ref={inputRef}
                className="bg-transparent py-2 pl-4 w-full max-w-full rounded outline-none mb-4"
              />

              <Input
                id="street"
                name="street"
                required
                type="text"
                placeholder="Rua"
                value={address.street}
                onChange={handleChangeValue}
                onFocus={getAddress}
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
                  value={address.number}
                  onChange={handleChangeValue}
                  // ref={inputRef}
                  className="bg-transparent py-2 pl-4 w-full max-w-full rounded outline-none mb-4"
                />

                <Input
                  id="complement"
                  name="complement"
                  type="text"
                  placeholder="Complemento"
                  value={address.complement}
                  onChange={handleChangeValue}
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
                value={address.neighborhood}
                onChange={handleChangeValue}
                // ref={inputRef}
                className="bg-transparent py-2 pl-4 w-full max-w-full rounded outline-none mb-4"
              />
            </div>
            <Button
              type="button"
              className="w-full max-w-full rounded-lg"
              isSelected
              onClick={saveAddress}
            >
              Salvar Endereço
            </Button>
          </>
        )}
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
                <Trash
                  onClick={() => removeProduct(product._id!)}
                  className="cursor-pointer"
                />
              </QuantityButton>
            </div>
          </div>
        ))}
        <Divider className="" />
        <div className=" flex flex-col  gap-3">
          <div className="flex justify-between">
            Total <span>R$ {totalProduct}</span>
          </div>
          <div className="flex justify-between">
            Taxa de entrega <span>5,00</span>
          </div>
          <div className="flex justify-between">
            Total+ entrega <span>R$ {purchaseTotal}</span>
          </div>
          {addressIsFilled && (
            <div>
              <Divider className="mb-8" />
              <h3 className="mb-4 font-bold">Endereço de Entrega</h3>
              <div>
                <span>Rua: {resumeAddress?.street}, </span>
                <span>nº {resumeAddress?.number} </span>
                <span>
                  {' '}
                  {resumeAddress?.complement
                    ? `- ${resumeAddress?.complement}`
                    : ''}
                </span>
                <span>- {resumeAddress?.neighborhood}</span>
              </div>
            </div>
          )}
          <Button
            type="button"
            className="w-full max-w-full rounded-lg"
            isSelected
            onClick={sendOrder}
          >
            Enviar Pedido
          </Button>
        </div>
      </div>
    </main>
  );
};
