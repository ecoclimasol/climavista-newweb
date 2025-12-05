'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { CLIENTS } from '@/config/constants';

// Composant pour afficher un logo client
const ClientLogo = ({ logo, name, alt }: { logo: string; name: string; alt: string }) => (
    <div className="flex flex-col items-center justify-center p-6 flex-shrink-0 w-[180px] h-[140px]">
        <div className="relative w-full h-24 flex items-center justify-center bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
            <Image 
                src={logo}
                alt={alt}
                width={120}
                height={80}
                className="object-contain max-w-full max-h-full transition-transform duration-300 hover:scale-110"
            />
        </div>
    </div>
);

export default function SocialProofSection() {
    const t = useTranslations('Landing');

    // Dupliquer les clients 3 fois pour créer un effet de boucle infinie fluide
    const duplicatedClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                    {t('social_proof_title')}
                </h2>
                <p className="text-center text-gray-500 mb-12 max-w-4xl mx-auto">
                    {t('social_proof_context')}
                </p>
                
                {/* Container du carrousel avec overflow caché */}
                <div className="relative w-full overflow-hidden">
                    {/* Gradients de fondu sur les côtés */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none" />
                    
                    {/* Carrousel animé */}
                    <div className="flex animate-scroll-left">
                        {duplicatedClients.map((client, index) => (
                            <ClientLogo 
                                key={`${client.name}-${index}`}
                                logo={client.logo}
                                name={client.name}
                                alt={client.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                .animate-scroll-left {
                    animation: scroll-left 40s linear infinite;
                }

                .animate-scroll-left:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}