/* eslint-disable no-underscore-dangle */
import { Trash } from '@phosphor-icons/react';
import { ChangeEvent, useContext, useState } from 'react';

import { AuthContext } from '../../../../contexts/AuthContext';
import { userService } from '../../../../services/userSevice';
import { IAdressUser } from '../../../../types/interface/User';
import { reload } from '../../../../utils/reload';
import { Button } from '../../../Button';

export const UserAddressForm = () => {
  const { userData } = useContext(AuthContext);
  const [addressIsFilled, setAddressIsFilled] = useState('');
  const { deleteAddress } = userService;

  const resumeAddress = userData?.addresses.find(
    (addressId) => addressId._id === addressIsFilled,
  );
  const dataStorage = {
    street: resumeAddress?.street,
    number: resumeAddress?.number,
    complement: resumeAddress?.complement,
    neighborhood: resumeAddress?.neighborhood,
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement> | any) => {
    setAddressIsFilled(e.target.value);
    localStorage.setItem('addrasync ess', JSON.stringify(dataStorage));
  };

  const handleRemoveAddress = async () => {
    const resp = await deleteAddress({
      id: userData?._id,
      addressId: resumeAddress?._id,
    });
    console.log(resp);

    if (resp) {
      alert('Endereço removido com sucesso!');
      reload();
    }
  };

  if (!userData) {
    return;
  }
  return (
    <div>
      {userData?.addresses?.length > 0 ? (
        <div className="flex flex-col justify-center items-center gap-4 mb-6">
          <p className="text-center mt-4 text-lg font-bold">
            Lista de endereços cadastrados
          </p>
          <select
            name="address-selected"
            id="address-selected"
            className="bg-transparent py-2 px-4 w-full max-w-full rounded outline-none border border-gray-500 focus:outline-none ring-primary-green-1 transition duration-500 focus:ring-1 resize-none mb-4 "
            onChange={handleChangeSelect}
          >
            <option
              className="flex flex-col justify-between gap-4 mb-6  bg-black"
              value="Selecione"
            >
              Selecione para remover
            </option>
            {userData.addresses.map((add: IAdressUser) => (
              <option
                className="flex flex-col justify-between gap-4 mb-6  bg-black"
                value={`${add._id}`}
                key={add._id}
              >
                <span>{add.street}, </span>
                <span>{add.number} </span>
              </option>
            ))}
          </select>
        </div>
      ) : (
        <p className="text-center mt-4 text-lg font-bold">
          Você ainda não possui nenhum endereço cadastrado
        </p>
      )}
      {addressIsFilled && (
        <div className="flex items-center gap-4">
          <div>
            <span>Rua: {resumeAddress?.street}, </span>
            <span>nº {resumeAddress?.number} </span>
            <span>
              {' '}
              {resumeAddress?.complement
                ? `- ${resumeAddress?.complement}`
                : ''}
            </span>
            <span>- {resumeAddress?.neighborhood}</span>
          </div>
          <Button
            isSelected={false}
            type="button"
            onClick={handleRemoveAddress}
          >
            <div className="flex items-center justify-center gap-2">
              <span>
                <Trash />
              </span>
              <span> Remover</span>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};
