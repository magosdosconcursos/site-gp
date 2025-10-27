export default function DiferenciaisSection() {
  const diferenciais: any[] = [];

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
