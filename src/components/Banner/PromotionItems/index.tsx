import { IPropsItems } from '../../../types/interface/ProductPromotions';
import { Button } from '../../Button';
import { Image } from '../../Image';

export const PromoItem = ({ description, src, title, alt }: IPropsItems) => (
  <section className="flex justify-between w-full ">
    <section className="flex flex-col items-start justify-around pl-10 w-[665px] max-sm:pl-2">
      <div className="flex flex-col gap-7">
        <h1
          className="text-6xl font-extrabold break-words w-11/12 max-sm:text-[2rem]

        "
        >
          {title}
        </h1>
        <p className="text-xl max-sm:text-xs">{description} </p>
      </div>
      <div>
        <Button isSelected className="max-sm:text-xs max-sm:p-3" type="button">
          Confira em nosso menu
        </Button>
      </div>
    </section>

    <section className=" flex h-full items-center relative  ">
      <Image
        className="w-[400px]
        max-sm:w-[998px] max-sm:ml-3
        max-md:w-[468px]
        "
        src={src}
        alt={alt}
      />
    </section>
    <div />
  </section>
);
