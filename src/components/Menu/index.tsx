/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-useless-return */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';

import { productService } from '../../services/productService';
import { ProductCategoryEnum } from '../../types/enum/Product';
import { IProduct } from '../../types/interface/Product';
import { Button } from '../Button';

import { ItemMenuCard } from './ItemMenuCard';

interface IPropsBtnMenu {
  id: string;
  value: string;
  name: string;
  isSelectedButton: boolean;
}

const dataBtn = [
  {
    id: ProductCategoryEnum.TRADICIONAL,
    name: 'Pizzas Tradicionais',
    value: 'traditional',
    isSelectedButton: true,
  },
  {
    id: ProductCategoryEnum.SWEET,
    name: 'Pizzas Doces',
    value: 'sweet',
    isSelectedButton: false,
  },
  {
    id: ProductCategoryEnum.DRINK,
    name: 'Bebidas',
    value: 'drinks',
    isSelectedButton: false,
  },
];

export const Menu = () => {
  const [listButtonsMenu, setListButtonsMenu] =
    useState<IPropsBtnMenu[]>(dataBtn);
  const [listProductItems, setListProductItems] = useState<IProduct[]>([]);
  const [idSelected, setIdSelected] = useState(ProductCategoryEnum.TRADICIONAL);
  const { getAllProducts } = productService;

  const getProduct = async () => {
    const data = await getAllProducts();
    if (!data) {
      return;
    }

    setListProductItems(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleButtonClick = (id: any) => {
    setListButtonsMenu((prev) => {
      return prev.map((item) =>
        item.id === id
          ? { ...item, isSelectedButton: !item.isSelectedButton }
          : item,
      );
    });

    Object.values(listButtonsMenu).filter((item) => {
      if (item.id !== id && item.isSelectedButton) {
        return setListButtonsMenu((prev) =>
          prev.map((btn) =>
            btn.id !== id && btn.isSelectedButton
              ? { ...btn, isSelectedButton: !btn.isSelectedButton }
              : btn,
          ),
        );
      }
    });

    setIdSelected(id);
  };

  useEffect(() => {
    setListButtonsMenu((prev) =>
      prev.map((btn) =>
        btn.id === 'item-pizza-trad'
          ? { ...btn, isSelectedButton: !btn.isSelectedButton }
          : btn,
      ),
    );
  }, []);

  return (
    <section className="w-full">
      <section className="mt-8 mb-8 flex flex-col flex-wrap pl-4">
        <h1 className="text-5xl font-semibold mb-8  max-md:text-3xl">Menu</h1>

        <div className="flex justify-start gap-4 w-full overflow-hidden max-sm:flex-col ">
          {listButtonsMenu.map((btn) => (
            <Button
              key={btn.value}
              isSelected={btn.isSelectedButton}
              className=""
              onClick={() => handleButtonClick(btn.id)}
              type="button"
              name={btn.name}
              value={btn.value}
            >
              {btn.name}
            </Button>
          ))}
        </div>
      </section>

      <section
        className="grid grid-cols-4 w-full  max-sm:grid-cols-1 pl-4
      max-md:grid-cols-2
      max-lg:grid-cols-3
      max-sm:justify-items-center
     "
      >
        {listProductItems.map((item) =>
          idSelected === item.category ? (
            <ItemMenuCard
              key={item._id}
              idProduct={idSelected}
              data={{
                id: item._id,
                name: item.name,
                price: item.price,
                src: item.image,
                alt: item.name,
                description: item.description,
                size: item.size !== 'nenhum' ? item.size.toUpperCase() : '',
              }}
            />
          ) : (
            ''
          ),
        )}
      </section>
    </section>
  );
};
