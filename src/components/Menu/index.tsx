import { itemsData } from '../../data/itemsData';
import { Button } from '../Button';

import { ItemMenuCard } from './ItemMenuCard';

export const Menu = () => {
  return (
    <section className="w-full">
      <section className="mt-8 mb-8">
        <h1 className="text-5xl font-semibold mb-8 px-10">Menu</h1>

        <div className="">
          <ul className="flex justify-start gap-4 px-10">
            <li>
              <Button isSelected className="" type="button">
                Pizzas Tradicionais
              </Button>
            </li>
            <li>
              <Button isSelected={false} className="" type="button">
                Pizzas Doces
              </Button>
            </li>
            <li>
              <Button isSelected={false} className="" type="button">
                Bebidas
              </Button>
            </li>
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-4 justify-items-center">
        {itemsData.map((item) => (
          <ItemMenuCard
            idProduct={item.idProduct}
            data={item.items.map((merda) => {
              const data = { ...merda };
              return data;
            })}
            value={0}
          />
        ))}
      </section>
    </section>
  );
};
