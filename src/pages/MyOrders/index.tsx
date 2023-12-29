/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';

import { Divider } from '../../components/Divider';
import { MyOrder } from '../../components/MyOrder';
import { LoadingSpinner } from '../../components/Spinner';
import { USER_DATA } from '../../hooks/useAuth';
import { orderService } from '../../services/orderService';

export const MyOrders = () => {
  const { findAllOrder } = orderService;
  const [data, setData] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllOrders = async () => {
    const response = await findAllOrder();
    const findUser = response.filter(
      (item: any) => item.userId === USER_DATA.id,
    );
    if (data.length === 0) {
      setIsLoading(true);
    }
    setIsLoading(false);
    setData(findUser);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className=" relative flex justify-center items-center max-w-7xl mx-auto mt-28 bg-black  m-auto  p-8  flex-col  max-md:mt-0 max-md:h-screen overflow-hidden">
      <h1 className="text-2xl">Meus pedidos </h1>
      <Divider />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {data.map((item: any) => (
            <MyOrder
              data={{
                orderNumber: item._id,
                text: 'Entregue',
                date: new Date(item.createdAt).toLocaleDateString(),
                hour: new Date(item.createdAt).toLocaleTimeString(),
                totalPrice: item.totalPrice,
              }}
              className="text-primary-green-0"
            />
          ))}
        </>
      )}
    </div>
  );
};
