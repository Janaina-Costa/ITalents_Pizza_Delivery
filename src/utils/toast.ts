import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = (text: string) => {
  toast.success(text, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};

export const notifyErro = (text: string) => {
  toast.error(text, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  });
};
