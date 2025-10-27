import dynamic from 'next/dynamic';

const DynamicCursosSection = dynamic(() => import('./CursosSection'), {
  loading: () => <p>Carregando...</p>,
});

export default DynamicCursosSection;
