/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-useless-return */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';

import { itemsData } from '../../data/itemsData';
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
    id: 'item-pizza-trad',
    name: 'Pizzas Tradicionais',
    value: 'traditional',
    isSelectedButton: true,
  },
  {
    id: 'item-pizza-sweet',
    name: 'Pizzas Doces',
    value: 'sweet',
    isSelectedButton: false,
  },
  { id: 'btn3', name: 'Bebidas', value: 'drinks', isSelectedButton: false },
];

export const Menu = () => {
  const [listButtonsMenu, setListButtonsMenu] =
    useState<IPropsBtnMenu[]>(dataBtn);
  const [listProductItems, setListProductItems] = useState(itemsData);
  const [idSelected, setIdSelected] = useState('item-pizza-trad');

  const handleButtonClick = (id: string) => {
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
      <section className="mt-8 mb-8">
        <h1 className="text-5xl font-semibold mb-8 px-10">Menu</h1>

        <div className="flex justify-start gap-4 px-10 list-btn">
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

      <section className="grid grid-cols-4 justify-items-center">
        {listProductItems.map((item) =>
          idSelected === item.idProduct ? (
            <ItemMenuCard
              key={item.idProduct}
              idProduct={idSelected}
              data={item.items.map((dataItems) => {
                const data = { ...dataItems };
                return data;
              })}
              value={0}
            />
          ) : (
            ''
          ),
        )}
      </section>
    </section>
  );
};
