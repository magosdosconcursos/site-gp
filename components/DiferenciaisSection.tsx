export default function DiferenciaisSection() {
  const diferenciais = [
    {
      title: 'Estude com exclusividade',
      bgColor: 'bg-transparent',
      textColor: 'text-secondary-blue-dark',
    },
    {
      title: 'Aprenda com qualidade',
      description: 'Aqui você terá acesso a materiais didáticos atualizados e completos, com professores experientes e qualificados.',
      bgColor: 'bg-primary-orange',
      textColor: 'text-white',
    },
    {
      title: 'O lugar certo para estudar',
      description: 'Conte com o suporte da equipe pedagógica e garanta uma preparação efetiva para sua prova.',
      bgColor: 'transparent',
      textColor: 'text-secondary-blue-dark',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-3 gap-4 mt-[-90px] p-4 rounded-lg">
        {diferenciais.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-3 ${item.bgColor} p-4 rounded-lg`}
          >
            <h2 className={`text-2xl font-bold ${item.textColor}`}>
              {item.title}
            </h2>
            <p className={`${item.textColor === 'text-white' ? 'text-white' : 'text-gray-700'}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
