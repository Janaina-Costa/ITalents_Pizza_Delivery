/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { TRow } from '../../components/Table/TRow';
import { productService } from '../../services/productService';
import { IProduct } from '../../types/interface/Product';
import { notifySuccess } from '../../utils/toast';

export const Admin = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();
  const { getAllProducts } = productService;

  const getProducts = async () => {
    const data: IProduct[] = await getAllProducts();
    if (!data) {
      return;
    }
    setProducts(data);
  };

  const handleRemoveProduct = async (id: string) => {
    const resp = window.confirm('Deseja realmente remover este produto?');
    if (resp) {
      await productService.deleteProduct(id);
      notifySuccess('Produto removido com sucesso!');
      getProducts();
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="flex flex-col w-full p-8 mt-48">
      <div className="flex justify-end w-full">
        <Button
          isSelected
          type="button"
          className="rounded-lg"
          onClick={() => navigate('/admin/add-product')}
        >
          Adicionar Produto
        </Button>
      </div>
      <div className="flex justify-center w-full mt-8">
        <Table>
          {products.map((product) => (
            <TRow
              key={product._id}
              productId={product._id as string}
              productImage={product.image}
              productName={product.name}
              productPrice={product.price}
              onRemoveProduct={handleRemoveProduct}
            />
          ))}
        </Table>
      </div>
    </section>
  );
};
