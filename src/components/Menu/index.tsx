import { Button } from '../Button';

import { ItemMenuCard } from './ItemMenuCard';

export const Menu = () => (
  <section className="bg-bg-main-menu w-full px-8">
    <section className="mt-8 mb-8">
      <h1 className="text-5xl font-semibold mb-8">Menu</h1>

      <div>
        <ul className="flex justify-between">
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

    <section className="grid grid-cols-4 text-center">
      <ItemMenuCard />
      <div>pizza</div>
      <div>pizza</div>
      <div>pizza</div>
      <div>pizza</div>
      <div>pizza</div>
      <div>pizza</div>
      <div>pizza</div>
    </section>
  </section>
);
