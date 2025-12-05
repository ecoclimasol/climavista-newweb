import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation.client';
import { COLORS } from '@/config/constants';

export default function CtaFinalSection() {
    const t = useTranslations('Landing');

    return (
        <section id="contact" className="py-20 bg-white text-center">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                    {t('cta_final_title')}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                    {t('cta_final_paragraph')}
                </p>
                <Link 
                    href="#" 
                    className="inline-block px-10 py-5 text-xl font-bold text-white rounded-lg shadow-2xl transition duration-300 transform hover:scale-[1.02]"
                    style={{ backgroundColor: COLORS['agri-blue'] }} // Bleu AGRITEMIS pour le CTA final
                >
                    {t('cta_final_button')}
                </Link>
            </div>
        </section>
    );
}