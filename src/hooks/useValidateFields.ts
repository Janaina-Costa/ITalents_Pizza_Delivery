import { useState } from 'react';

import {
  completeNameValidate,
  emailValidate,
} from '../utils/validationsFields';

export const useValidateFields = () => {
  const [errosField, setErrosFields] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const validation = (name: string, value: string) => {
    let errorMessage = '';
    switch (name) {
      case 'name':
        errorMessage =
          completeNameValidate(value) === true ||
          (completeNameValidate(value) === true && value.length > 0)
            ? ''
            : 'Preenchimento de nome e sobrenome é obrigatórios';
        break;
      case 'email':
        errorMessage =
          emailValidate(value) === true ||
          (emailValidate(value) === true && value.length > 0)
            ? ''
            : 'Email inválido';
        break;
      case 'password':
        errorMessage =
          value.length >= 8 ? '' : 'Senha deve ter no mínimo 8 caracteres';
        break;
      case 'phone':
        errorMessage =
          value.length >= 9 ? '' : 'Celular dever etr no mínimo 9 caracteres';
        break;

      default:
        break;
    }
    return errorMessage;
  };

  return { validation, errosField, setErrosFields };
};
