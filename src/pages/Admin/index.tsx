/* eslint-disable jsx-a11y/control-has-associated-label */

import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { TRow } from '../../components/Table/TRow';

export const Admin = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col w-full p-8 mt-24">
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
          <TRow
            productId="1"
            productImage=""
            productName="Produto 1"
            productPrice={20}
          />
          <TRow
            productId="1"
            productImage=""
            productName="Produto 1"
            productPrice={20}
          />
          <TRow
            productId="1"
            productImage=""
            productName="Produto 1"
            productPrice={20}
          />
        </Table>
      </div>
    </section>
  );
};
