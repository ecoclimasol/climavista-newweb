// src/components/LanguageSwitcher.tsx
'use client'; // 👈 CECI EST CRUCIAL pour utiliser useState et les événements onClick

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Définition des langues supportées avec les icônes de drapeau (emojis)
const FLAGS = {
  en: { label: 'English', icon: '🇺🇸' },
  fr: { label: 'Français', icon: '🇫🇷' },
  es: { label: 'Español', icon: '🇪🇸' },
  pt: { label: 'Português', icon: '🇧🇷' },
};

const SUPPORTED = ['en', 'fr', 'es', 'pt'] as const;
type SupportedLocale = (typeof SUPPORTED)[number];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Déterminer la locale actuelle à partir de l'URL
  const currentPathSegment = pathname.split('/')[1];
  const currentLocale = SUPPORTED.includes(currentPathSegment as SupportedLocale) 
    ? (currentPathSegment as SupportedLocale) 
    : 'en';

  const currentFlag = FLAGS[currentLocale];

  // Fonction pour déterminer le chemin vers une autre langue
  const getPathForLocale = (locale: SupportedLocale) => {
    // Remplacer la locale actuelle par la nouvelle locale dans l'URL
    return pathname.replace(`/${currentLocale}`, `/${locale}`);
  };

  return (
    <div className="relative z-50">
      {/* Bouton principal (drapeau actuel) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-white/20"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{currentFlag.icon}</span>
        {/* On affiche le nom complet seulement pour le débogage ou si c'est nécessaire */}
        <span className="hidden md:inline">{currentFlag.label}</span> 
        {/* Icône de flèche pour le menu déroulant */}
        <svg
          className={`h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            {SUPPORTED.map((lng) => {
              const flag = FLAGS[lng];
              if (lng === currentLocale) return null; // Ne pas afficher la langue actuelle

              return (
                <Link
                  key={lng}
                  href={getPathForLocale(lng)}
                  // Fermer le menu après la sélection
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-slate-100"
                >
                  <span className="text-lg">{flag.icon}</span>
                  {flag.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}