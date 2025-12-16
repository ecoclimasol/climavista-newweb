'use client';

import { useState, useEffect } from 'react';

// Liste des chemins d'images dans le dossier public/
const images = [
  '/HeroBanner1.png',
  '/HeroBanner2.png',
  '/HeroBanner3.png',
];

// Durée de chaque image (en millisecondes). Ex: 5000ms = 5 secondes
const DURATION = 5000;

export default function HeroImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Fonction pour passer à l'image suivante
    const nextImage = () => {
      setCurrent((prev) => (prev + 1) % images.length);
    };

    // Démarre l'intervalle de défilement
    const interval = setInterval(nextImage, DURATION);

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []); // Le tableau vide assure que l'effet s'exécute une seule fois au montage

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out`}
          style={{
            backgroundImage: `url(${src})`,
            // Afficher l'image actuelle, cacher les autres
            opacity: index === current ? 1 : 0,
            // Pour garantir que les images ne prennent pas de place
            pointerEvents: index === current ? 'auto' : 'none',
          }}
        />
      ))}
    </div>
  );
}