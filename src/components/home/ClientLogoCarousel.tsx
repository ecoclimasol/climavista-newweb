// src/components/ClientLogoCarousel.tsx
'use client'; 

import Image from 'next/image';
import React from 'react';

// Liste des 10 chemins d'accès à vos logos dans le dossier public/
const clientLogos = [
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.png',
  '/logos/logo5.png',
  '/logos/logo6.png',
  '/logos/logo7.png',
  '/logos/logo8.png',
  '/logos/logo9.png',
  '/logos/logo10.png',
];

// Pour l'effet infini, nous dupliquons les logos dans le Marquee
const duplicatedLogos = [...clientLogos, ...clientLogos]; 

// Composant Marquee CSS Keyframes (Pas besoin de Keyframes dans ce code)
// L'animation CSS est gérée par les classes Tailwind que nous allons injecter
// via un fichier CSS ou des styles personnalisés. 

// src/components/ClientLogoCarousel.tsx (Seul le JSX de la fonction est modifié)

// ... (imports et définition des logos inchangés) ...

export default function ClientLogoCarousel() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Conteneur 1: Masque les bords (fade effect) et gère le débordement */}
          <div className="relative w-full overflow-hidden">
          
          {/* Conteneur 2: Le Marquee - Il a l'animation et la largeur doublée (w-[200%]) */}
          <div 
            // ⚠️ AJOUT DE L'ESPACEMENT, DU SINGLE LINE ET DE LA LARGEUR EXAGÉRÉE
          className="flex items-center space-x-12 whitespace-nowrap w-[300%] animate-scroll-left"
          >
              {duplicatedLogos.map((src, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={src}
                  alt={`Client logo ${index + 1}`}
                  width={120} 
                  height={40}
                  // On rend les logos plus discrets (gris)
                  //className="h-10 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
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