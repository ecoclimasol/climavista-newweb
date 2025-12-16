// components/home/LifecycleSection.tsx
import React from 'react';

// Types des données (basés sur votre home.json)
type Step = {
  label: string;
  description: string;
};

type LifecycleData = {
  title: string;
  subtitle: string;
  steps: Step[];
};

type LifecycleSectionProps = {
  data: LifecycleData;
};

export default function LifecycleSection({ data }: LifecycleSectionProps) {
  const { title, subtitle, steps } = data;

  return (
    // Section sur fond blanc ou très clair pour la lisibilité
    <section className="py-16 md:py-24 bg-white"> 
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

        {/* --- Grille des Étapes (5 Cartes) --- */}
        {/* Utilisation d'une grille pour s'assurer que les cartes sont alignées
            md:grid-cols-2 (2 colonnes sur tablette)
            xl:grid-cols-5 (5 colonnes sur grand écran pour l'effet Timeline)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8">
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              // Une carte simple et élégante avec une transition d'ombre
              className="group flex flex-col p-6 border border-slate-200 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 xl:col-span-1"
            >
              {/* Le Numéro de l'Étape (Point Focal) */}
              <div className="flex items-center mb-4">
                <span className="h-10 w-10 flex items-center justify-center text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg transition-transform group-hover:scale-105">
                  {index + 1}
                </span>
                
                {/* Ligne de connexion pour l'effet Timeline (visible uniquement sur les grands écrans) */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block h-1 w-full bg-slate-200 absolute left-[calc(100%)] top-10 transform -translate-y-1/2 -ml-1" />
                )}
              </div>
              
              {/* Titre de l'Étape */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {step.label}
              </h3>
              
              {/* Description de l'Étape */}
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                {step.description}
              </p>
              
              {/* Ligne visuelle en bas pour séparer la carte (optionnel mais propre) */}
              <div className="mt-4 pt-4 border-t border-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity">
                 {/* Ce bloc peut être utilisé pour ajouter un lien "Voir détail" si besoin */}
              </div>
            </div>
          ))}
          
        </div>
        
      </div>
    </section>
  );
}