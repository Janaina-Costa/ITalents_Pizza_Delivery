import { ImgHTMLAttributes } from 'react';

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  onclickImage?: () => void;
}

export const Image = ({ src, alt, className, onclickImage }: IProps) => {
  return (
    <button
      type="button"
      className="bg-transparent border-none outline-none cursor-default"
      onClick={onclickImage}
    >
      <img src={src} alt={alt} className={className} />
    </button>
  );
};
