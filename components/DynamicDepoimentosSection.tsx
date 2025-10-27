import dynamic from 'next/dynamic';

const DynamicDepoimentosSection = dynamic(() => import('./DepoimentosSection'), {
  loading: () => <p>Carregando...</p>,
});

export default DynamicDepoimentosSection;
