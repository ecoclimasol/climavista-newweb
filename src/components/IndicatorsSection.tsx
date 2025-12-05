import { useTranslations } from 'next-intl';
import IndicatorCard from './IndicatorCard'; // Import du composant enfant

export default function IndicatorsSection() {
    const t = useTranslations('Landing');

    // Définition des données des indicateurs
const indicatorsData = [
  { 
    image: "/indicators/ari.png",
    title: t('indicator_ari_title'),
    description: t('indicator_ari_short_desc'),
    linkText: t('indicator_learn_more')
  },
  { 
    image: "/indicators/cri.png",
    title: t('indicator_cri_title'),
    description: t('indicator_cri_short_desc'),
    linkText: t('indicator_learn_more')
  },
  { 
    image: "/indicators/bri.png",
    title: t('indicator_bri_title'),
    description: t('indicator_bri_short_desc'),
    linkText: t('indicator_learn_more')
  },
  { 
    image: "/indicators/cori.png",
    title: t('indicator_cori_title'),
    description: t('indicator_cori_short_desc'),
    linkText: t('indicator_learn_more')
  },
  { 
    image: "/indicators/wari.png",
    title: t('indicator_wari_title'),
    description: t('indicator_wari_short_desc'),
    linkText: t('indicator_learn_more')
  }
];
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    {t('indicators_title')}
                 </h2>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                   {t('indicators_title2')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {indicatorsData.map((data, index) => (
                        <IndicatorCard key={index} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
}