interface IProps {
  className?: string;
}

export const Divider = ({ className }: IProps) => {
  return (
    <div
      className={`w-full z-50 flex items-center justify-center relative mb-16 mt-14 before:content-[' '] before:flex before:relative before:border-gray-600 before:border-b-[.0935px] before:w-full after:content-[' '] after:border-primary-red-1 after:border-b-[.0935px] after:w-[70%] after:absolute  after:left-[15%]
      ${className}
      `}
    />
  );
};
