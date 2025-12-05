import { useTranslations } from 'next-intl';
import { COLORS } from '@/config/constants';

export default function BenefitsSection() {
    const t = useTranslations('Landing');

    // Liste des bénéfices pour le mapping
    const benefits = [
        t('benefit_1'),
        t('benefit_2'),
        t('benefit_3'),
        t('benefit_4')
    ];

    return (
        <section className="py-16 rounded-xl mt-16 shadow-2xl" style={{ backgroundColor: COLORS['agri-green'] }}>
            <div className="container mx-auto px-4 max-w-6xl text-white">
                <h2 className="text-3xl font-bold text-center mb-10">
                    {t('benefits_title')}
                </h2>
                <ul className="space-y-6 max-w-3xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start bg-black/10 p-4 rounded-lg shadow-inner">
                            {/* Icône Checkmark */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-300 mt-1 flex-shrink-0 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                            <p className="text-lg font-medium">{benefit}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}