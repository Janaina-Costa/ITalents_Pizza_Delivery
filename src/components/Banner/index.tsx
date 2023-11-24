import { useState } from 'react';

import promoData from '../../data/promoData';
import { IPropsPromotion } from '../../types/interface/promotions';

import { ActiveSlides } from './ActiveSliders';
import { PromoItem } from './PromotionItems';

export const Banner = () => {
  const [itemPromo, setItemPromo] = useState<IPropsPromotion[]>(promoData);
  return (
    <section className="h-[400px] bg-back-banner w-full  px-4">
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
            />
          ))}
        </ActiveSlides>
      </div>
    </section>
  );
};
