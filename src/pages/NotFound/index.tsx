import { SmileySad } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <div className="!bg-bg-not-found w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-4xl mb-8 text-primary-red-0">404</h1>
        <h1 className="text-4xl mb-8">Página não encontrada!</h1>
        <SmileySad size={100} color="#ffffff" weight="thin" />
        <p className="mt-8">
          Volte para à{' '}
          <span className="text-primary-green-1 underline">
            <Link to="/">página principal</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
