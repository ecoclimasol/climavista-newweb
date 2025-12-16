// src/components/home/CoreServicesSection.tsx
import React from 'react';

// Placeholders d'icônes
// La fonction accepte une string, donc elle fonctionnera même si le type est générique
const getIcon = (name: string) => {
  switch (name) {
    case 'BI': return <span className="text-4xl text-blue-600">📊</span>;
    case 'Parametric': return <span className="text-4xl text-green-600">⚖️</span>;
    case 'Alerts': return <span className="text-4xl text-red-600">🚨</span>;
    default: return <span className="text-4xl text-slate-600">✨</span>;
  }
};

type ServicePillar = {
  // ⚠️ CORRECTION ICI : Changement de l'union littérale vers 'string' simple
  // Cela permet d'accepter les données du JSON sans erreur de typage
  id: string; 
  title: string;
  description: string;
  focus: string;
};

type CoreServicesData = {
  title: string;
  subtitle: string;
  pillars: ServicePillar[];
};

type CoreServicesSectionProps = {
  data: CoreServicesData;
};

export default function CoreServicesSection({ data }: CoreServicesSectionProps) {
  const { title, subtitle, pillars } = data;

  return (
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

        {/* --- Les 3 Piliers (Grille de Cartes) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="group flex flex-col p-6 bg-slate-50 border border-slate-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                {getIcon(pillar.id)}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {pillar.title}
              </h3>
              
              <p className="text-sm font-medium text-slate-700 mb-4 flex-grow">
                {pillar.description}
              </p>
              
              {/* Le focus clé comme un sous-titre */}
              <div className="mt-auto border-t border-slate-200 pt-4">
                 <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    Focus:
                 </p>
                 <p className="text-sm font-medium text-slate-900 mt-1">
                    {pillar.focus}
                 </p>
              </div>
            </div>
          ))}
          
        </div>
        
      </div>
    </section>
  );
}