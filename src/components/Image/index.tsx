import { User } from '@phosphor-icons/react';
import { ImgHTMLAttributes, useCallback } from 'react';

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  onclickImage?: () => void;
}

export const Image = ({ src, alt, className, onclickImage }: IProps) => {
  const handleImageError = useCallback(() => {
    return <User size={80} />;
  }, []);
  return (
    <button
      type="button"
      className="bg-transparent border-none outline-none cursor-default"
      onClick={onclickImage}
    >
      <img
        src={src}
        alt={alt}
        className={className}
        onError={handleImageError}
      />
    </button>
  );
};
