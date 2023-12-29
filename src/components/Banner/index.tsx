import { useState } from 'react';

import promoData from '../../data/promoData';
import { IPropsItems } from '../../types/interface/ProductPromotions';

import { ActiveSlides } from './ActiveSliders';
import { PromoItem } from './PromotionItems';

export const Banner = () => {
  const [itemPromo, setItemPromo] = useState<IPropsItems[]>(promoData);
  return (
    <section className="h-[400px] bg-back-banner-2 bg-no-repeat bg-cover  w-full rounded-1xl px-4">
      <div className="flex w-full h-full">
        <ActiveSlides>
          {itemPromo.map((promoItem) => (
            <PromoItem
              key={promoItem.id}
              id={promoItem.id}
              title={promoItem.title}
              description={promoItem.description}
              src={promoItem.src}
              alt={promoItem.alt}
              price={promoItem.price}
            />
          ))}
        </ActiveSlides>
      </div>
    </section>
  );
};
