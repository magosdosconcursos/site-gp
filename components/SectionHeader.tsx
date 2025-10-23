interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <div className="flex gap-2 items-center justify-center mb-4">
        <div className="w-8 h-1 bg-primary-orange"></div>
        <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">{label}</p>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-secondary-blue-dark mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
