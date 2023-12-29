interface IProps {
  orderNumber: string;
  text: string;

  date: string;
  hour: string;
  totalPrice: number;
}
interface IPropsOder {
  data: IProps;
  className: string;
}

export const MyOrder = ({ data, className }: IPropsOder) => {
  return (
    <div className="w-96 p-4 border-b-2 border-primary-green-2 mb-6">
      <div className="flex justify-between mb-2 ">
        <div className="text-xl text-ellipsis overflow-hidden">
          Pedido # {data.orderNumber}
        </div>
        <div className={`${className}`}>{data.text} </div>
      </div>
      <div className="text-gray-600 text-xs">
        <span>{data.date} </span> - <span>{data.hour} </span>
      </div>
      <div className="mt-5">
        <p className="text-gray-600">Total</p>
        <p className="text-xl text-primary-red-0 font-bold">
          R$ <span>{data.totalPrice}</span>
        </p>
      </div>
    </div>
  );
};
