export const THead = () => {
  return (
    <thead
      className="
          bg-gradient-to-r from-primary-red-1 from-0% via-primary-red-0 via-[49%] to-primary-red-2 to-100%
          "
    >
      <tr className="text-left  ">
        <th className="px-6 py-3 max-sm:hidden">ID</th>
        <th className="px-6 py-3">Imagem</th>
        <th className="px-6 py-3">Nome</th>
        <th className="px-6 py-3">Preço</th>
        <th className="px-6 py-3">Ações</th>
      </tr>
    </thead>
  );
};
