/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useEffect, useRef, useState } from 'react';

import { Button } from '../../../components/Button';
import Input from '../../../components/Input';
import { productService } from '../../../services/productService';
import {
  ProductCategoryEnum,
  ProductSizesEnum,
} from '../../../types/enum/Product';
import { IProduct } from '../../../types/interface/Product';
import { notifySuccess } from '../../../utils/toast';

export const AddProduct = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { createProduct } = productService;
  const [inputProductForm, setInputProductForm] = useState<IProduct>({
    name: '',
    description: '',
    price: 0,
    image: '',
    category: ProductCategoryEnum.TRADICIONAL,
    size: ProductSizesEnum.N,
  });

  const optionsCategory = [ProductCategoryEnum].map((option) =>
    Object.values(option).map((value) => value),
  );

  const optionsSize = [ProductSizesEnum].map((option) =>
    Object.values(option).map((value) => value),
  );

  const handleInputChange = (event: any) => {
    setInputProductForm({
      ...inputProductForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const product = {
      ...inputProductForm,
      price: Number(inputProductForm.price),
    };

    createProduct(product);
    notifySuccess('Produto cadastrado com sucesso!');
    setInputProductForm({
      name: '',
      description: '',
      price: 0,
      image: '',
      category: ProductCategoryEnum.TRADICIONAL,
      size: ProductSizesEnum.N,
    });
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <section className="max-w-screen-xl mt-48 m-auto">
      <div>
        <h1 className="text-2xl">Cadastro de Produtos</h1>
      </div>
      <form
        className=" w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6 bg-black "
        onSubmit={handleSubmit}
      >
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
            onChange={handleInputChange}
            value={inputProductForm.name}
          />
          <label htmlFor="category" className="mb-2">
            Categoria
          </label>
          <select
            name="category"
            id="category"
            className="bg-transparent py-2 px-4 w-full max-w-full rounded outline-none border border-gray-500 focus:outline-none ring-primary-green-1 transition duration-500 focus:ring-1 resize-none mb-4"
            value={inputProductForm.category}
            onChange={handleInputChange}
          >
            {optionsCategory[0].map((option, index) => (
              <option
                className="flex flex-col justify-between gap-4 mb-6  bg-black"
                key={`${option}${index}`}
                value={option}
              >
                {option.toLocaleUpperCase()}
              </option>
            ))}
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
            onChange={handleInputChange}
            value={inputProductForm.description}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="mb-2">
            Preço
          </label>
          <Input
            id="price"
            name="price"
            value={inputProductForm.price}
            required
            type="number"
            className="bg-transparent py-2 pl-4 w-full max-w-full rounded outline-none mb-4"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            value={inputProductForm.image}
          />
          <label htmlFor="category" className="mb-2">
            Tamanho (Apenas para pizzas)
          </label>
          <select
            name="size"
            id="size"
            value={inputProductForm.size}
            onChange={handleInputChange}
            className="bg-transparent py-2 px-4 w-full max-w-full rounded outline-none border border-gray-500 focus:outline-none ring-primary-green-1 transition duration-500 focus:ring-1 resize-none"
          >
            {optionsSize[0].map((option, index) => (
              <option
                className="flex flex-col justify-between gap-4 mb-6  bg-black"
                key={`${option}${index}`}
                value={option}
              >
                {option.toLocaleUpperCase()}
              </option>
            ))}
          </select>
          <Button isSelected type="submit" className="rounded-lg mt-12">
            Adicionar
          </Button>
        </div>
      </form>
    </section>
  );
};
