// components/home/ValueProposition.tsx

import React from 'react';
import Link from 'next/link';

// Icônes pour le style (nécessite l'installation d'une librairie d'icônes, ex: lucide-react)
// Si vous n'avez pas de librairie, remplacez les icônes par <div> ou des emojis.
// J'utilise ici un placeholder basé sur Tailwind/Emoji.

// Types des données (basés sur votre home.json)
type ValuePropositionData = {
  title: string;
  subtitle: string;
  todayTitle: string;
  todayItems: string[];
  tomorrowTitle: string;
  tomorrowItems: string[];
  ctaLabel: string;
  ctaLink?: string; // Ajout d'un lien pour le CTA
};

type ValuePropositionProps = {
  data: ValuePropositionData;
};

export default function ValueProposition({ data }: ValuePropositionProps) {
  const {
    bigtitle,
    title,
    subtitle,
    ctaLabel,
    // Nous utiliserons le lien '/' comme défaut si non fourni
    ctaLink = "#product-vision", 
  } = data;


  return (
    // La section est centrée dans un conteneur standard de 6xl
    <section className="py-16 md:py-24 bg-white"> 
      <div className="mx-auto max-w-6xl px-6"> 
        
        {/* --- En-tête de Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-slate-900 mb-4">
            {bigtitle}
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
           <p className="text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* --- Call to Action --- */}
        <div className="mt-16 text-center">
          <Link 
            href={ctaLink}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-slate-700"
          >
            {ctaLabel} →
          </Link>
        </div>
        
      </div>
    </section>
  );
}