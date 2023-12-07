/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useRef, useState } from 'react';

import { Button } from '../../../components/Button';
import Input from '../../../components/Input';
import { IProduct } from '../../../types/Product';

export const AddProduct = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputProductForm, setInputProductForm] = useState<IProduct>({
    name: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    size: '',
  });

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <section className="max-w-screen-xl mt-24 m-auto">
      <div>
        <h1 className="text-2xl">Cadastro de Produtos</h1>
      </div>
      <form className=" w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6 bg-black ">
        <div className="flex flex-col ">
          <label htmlFor="name" className="mb-2">
            Nome
          </label>
          <Input
            id="name"
            name="name"
            required
            type="text"
            ref={inputRef}
            className="bg-transparent py-2 pl-4 w-full max-w-full rounded outline-none mb-4"
          />
          <label htmlFor="category" className="mb-2">
            Categoria
          </label>
          <select
            name=""
            id=""
            className="bg-transparent py-2 px-4 w-full max-w-full rounded outline-none border border-gray-500 focus:outline-none ring-primary-green-1 transition duration-500 focus:ring-1 resize-none mb-4"
          >
            <option value="">1</option>
          </select>

          <label htmlFor="description" className="mb-2">
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            cols={30}
            rows={5}
            required
            className="bg-transparent py-2 px-4 w-full max-w-full rounded outline-none border border-gray-500 focus:outline-none ring-primary-green-1 transition duration-500 focus:ring-1 resize-none "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="mb-2">
            Preço
          </label>
          <Input
            id="price"
            name="price"
            required
            type="text"
            className="bg-transparent py-2 pl-4 w-full max-w-full rounded outline-none mb-4"
          />

          <label htmlFor="image" className="mb-2">
            Imagem
          </label>
          <Input
            id="image"
            name="image"
            required
            type="text"
            className="bg-transparent py-2 pl-4 w-full max-w-full rounded outline-none mb-4"
          />
          <label htmlFor="category" className="mb-2">
            Tamanho (Apenas para pizzas)
          </label>
          <select
            name=""
            id=""
            className="bg-transparent py-2 px-4 w-full max-w-full rounded outline-none border border-gray-500 focus:outline-none ring-primary-green-1 transition duration-500 focus:ring-1 resize-none"
          >
            <option value="">1</option>
          </select>
          <Button isSelected type="button" className="rounded-lg mt-12">
            Adicionar
          </Button>
        </div>
      </form>
    </section>
  );
};
