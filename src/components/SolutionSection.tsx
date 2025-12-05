import { useTranslations } from 'next-intl';
import { COLORS } from '@/config/constants';

// Ce composant articule la mission et la proposition de valeur d'Agritemis.
export default function SolutionSection() {
    const t = useTranslations('Landing');

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    {/* Colonne du Contenu Principal */}
                    <div className="lg:w-7/12">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                            {t('solution_headline')}
                        </h2>
                        
                        <p className="text-xl text-gray-700 mb-6">
                            {t('solution_description_1')}
                        </p>
                        
                        <div className="bg-gray-100 p-6 rounded-xl shadow-inner border-l-4" style={{ borderColor: COLORS['agri-green'] }}>
                            <p className="font-semibold text-gray-800 italic">
                                {t('solution_description_2')}
                            </p>
                        </div>
                    </div>

                    {/* Colonne de la Mission (Side Card) */}
                    <div className="lg:w-5/12 w-full">
                        <div className="p-8 rounded-xl shadow-2xl h-full flex flex-col justify-center" style={{ backgroundColor: COLORS['agri-green'] }}>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {t('mission_title')}
                            </h3>
                            <p className="text-gray-200 leading-relaxed">
                                {t('mission_text')}
                            </p>
                            <span className="mt-4 inline-block text-sm font-semibold text-white/80 border-b border-white/50 pb-1">
                                {t('mission_learn_more')}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}