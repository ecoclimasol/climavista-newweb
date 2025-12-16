// components/home/BenefitsSection.tsx
import React from 'react';

// Types des données
type Audience = {
  name: string;
  icon: string; // Utilisé ici comme un placeholder textuel
  benefits: string[];
};

type BenefitsData = {
  title: string;
  subtitle: string;
  audiences: Audience[];
};

type BenefitsSectionProps = {
  data: BenefitsData;
};

// Icône de Puce (Placeholder)
const BenefitCheck = () => (
  <svg className="h-5 w-5 flex-shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

// Icônes de Public (Placeholders que vous remplacerez)
const getAudienceIcon = (iconName: string) => {
    switch (iconName) {
        case 'Assureur':
            return <span className="text-3xl">🏛️</span>;
        case 'Réassureur':
            return <span className="text-3xl">🛡️</span>;
        case 'Expert':
            return <span className="text-3xl">🔎</span>; // Expert / Claims Adjuster
        default:
            return <span className="text-3xl">✨</span>;
    }
};


export default function BenefitsSection({ data }: BenefitsSectionProps) {
  const { title, subtitle, audiences } = data;

  return (
    <section className="py-16 md:py-24 bg-slate-50"> 
      <div className="mx-auto max-w-6xl px-6"> 
        
        {/* --- En-tête de Section --- */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* --- Grille des Audiences (3 Cartes) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="flex flex-col p-8 bg-white rounded-xl border border-slate-200 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                 {getAudienceIcon(audience.icon)}
                <h3 className="text-2xl font-bold text-slate-900">
                  {audience.name}
                </h3>
              </div>
              
              <ul className="space-y-4 pt-4">
                {audience.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-3">
                    <BenefitCheck />
                    <p className="text-base text-slate-700 leading-snug">
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
        
      </div>
    </section>
  );
}