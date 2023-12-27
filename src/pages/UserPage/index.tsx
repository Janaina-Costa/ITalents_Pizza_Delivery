import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Divider } from '../../components/Divider';
import { UserForm } from '../../components/Forms/UserForm';
import { UserAddressForm } from '../../components/Forms/UserForm/UserAddress';
import { userService } from '../../services/userSevice';
import { reload } from '../../utils/reload';

export const UserPage = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    image: '',
  });
  // const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { getUserById, updateUser } = userService;
  const { id } = useParams();

  const getUser = async () => {
    if (!id) {
      return;
    }
    const user = await getUserById(id);
    setInputValue(user);
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmitUpdate = async (e: FormEvent) => {
    if (!id) {
      return;
    }
    e.preventDefault();
    const response = await updateUser(id, inputValue);
    if (response) {
      setInputValue(response);
      alert('Dados alterados com sucesso!');
      reload();
    }
  };

  const handleEditButton = () => {
    setIsDisabled(false);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="bg-black max-w-[40rem] m-auto mt-28 p-8 flex justify-center flex-col items-center max-md:mt-0 max-md:h-screen overflow-hidden">
      <UserForm
        value={{
          name: inputValue.name,
          email: inputValue.email,
          password: inputValue.password,
          phone: inputValue.phone,
          image: inputValue.image,
        }}
        onChangeInputName={handleChangeValue}
        onChangeInputEmail={handleChangeValue}
        onChangeInputPhone={handleChangeValue}
        onChangeInputPhotoUrl={handleChangeValue}
        onSubmitRegister={handleSubmitUpdate}
        onEditRegister={handleEditButton}
        isDisabled={isDisabled}
      />
      <Divider />
      <UserAddressForm />
    </div>
  );
};
