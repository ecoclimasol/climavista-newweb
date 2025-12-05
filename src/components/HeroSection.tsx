import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation.client';
import { COLORS, HERO_BACKGROUND_IMAGE } from '@/config/constants';

// Ce composant est responsable de l'accroche principale et du CTA
export default function HeroSection() {
    const t = useTranslations('Landing');

    return (
        <header 
            className="relative py-20 lg:py-32 mb-4 overflow-hidden rounded-xl shadow-inner"
            style={{
                backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // Effet parallax subtil
            }}
        >
            {/* Overlay sombre pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            
            <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
                <h1 className="text-8xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
                    {t('hero_headline')}
                </h1>
                <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
                    {t('hero_punchline')}
                </p>
                <Link 
                    href="#contact" 
                    className="inline-block px-8 py-4 text-lg font-bold text-white rounded-lg shadow-lg transition duration-300 transform hover:scale-[1.02]"
                    style={{ backgroundColor: COLORS['agri-green'] }} 
                >
                    {t('hero_cta')}
                </Link>
            </div>
        </header>
    );
}