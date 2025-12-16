// src/app/[locale]/parametric/page.tsx

// ⚠️ Mettez à jour cet import pour pointer vers la nouvelle fonction de dictionnaire
// 1. Importez la fonction depuis son fichier dédié
import { getParametricDictionary } from "@/i18n/getParametricDictionary";

// 2. Importez le TYPE depuis le fichier principal (là où il est défini)
import { type SupportedLocale } from "@/i18n/getHomeDictionary";

import Link from 'next/link';
import React from 'react';

// --- Définitions d'Icônes (Placeholders) ---
// Ces fonctions simulent l'affichage d'icônes réelles que vous pourriez avoir (ex: de Lucide ou Heroicons)
const getFeatureIcon = (name: string) => {
    switch (name) {
        case 'vitesse': return <span className="text-3xl text-blue-600">⏱️</span>;
        case 'cout': return <span className="text-3xl text-blue-600">💸</span>;
        case 'transparence': return <span className="text-3xl text-blue-600">✅</span>;
        default: return <span className="text-3xl text-blue-600">💡</span>;
    }
};

const getStepIcon = (name: string) => {
    switch (name) {
        case 'design': return <span className="text-3xl text-green-600">📐</span>;
        case 'data': return <span className="text-3xl text-green-600">🛰️</span>;
        case 'operation': return <span className="text-3xl text-green-600">⚙️</span>;
        default: return <span className="text-3xl text-green-600">➡️</span>;
    }
};

// --- Composant Principal de la Page ---

export default async function ParametricSolutionsPage({ params }: { params: { locale: SupportedLocale } }) {
  const { locale } = params;
  
  // ⚠️ CHARGEMENT CORRECT DES DONNÉES (directement depuis le JSON)
  const data = await getParametricDictionary(locale); 

  const currentLocale = locale; 

  return (
    // ⚠️ CORRECTION 1: Suppression du pt-20 du conteneur principal
    <div className="w-full"> 
      
      {/* 1. HERO SECTION (Simple) */}
      {/* ⚠️ CORRECTION 2: Augmentation du padding-top pour dégager la navbar */}
      <section className="relative pt-32 md:pt-40 pb-24 md:pb-36 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.hero.title}</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">{data.hero.subtitle}</p>
          <Link 
            href={data.hero.ctaLink} 
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-blue-700 shadow-xl"
          >
            {data.hero.ctaLabel} &rarr;
          </Link>
        </div>
      </section>
      
      {/* 2. PROBLÈME & VALEUR */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">{data.value.title}</h2>
             <p className="text-lg text-slate-600">{data.value.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.value.features.map((feature, index) => (
              <div key={index} className="p-6 border border-slate-200 rounded-lg bg-slate-50 shadow-md">
                <div className="mb-4">{getFeatureIcon(feature.icon)}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.label}</h3>
                <p className="text-base text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 3. PROCESSUS CLIMAVISTA */}
      <section className="py-20 md:py-28 bg-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">{data.process.title}</h2>
             <p className="text-lg text-slate-600">{data.process.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.process.steps.map((step, index) => (
              <div key={index} className="relative p-6 bg-white rounded-lg shadow-xl border-t-4 border-green-500">
                 <span className="absolute -top-4 left-6 h-8 w-8 flex items-center justify-center text-xl font-bold rounded-full bg-green-500 text-white mb-4 md:mb-0">
                    {index + 1}
                 </span>
                 <div className="mb-4 pt-4">{getStepIcon(step.icon)}</div>
                 <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.label}</h3>
                 <p className="text-base text-slate-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERTISE ET ÉTUDES DE CAS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">{data.expertise.title}</h2>
             <p className="text-lg text-slate-600">{data.expertise.subtitle}</p>
          </div>
          <div className="space-y-12">
            {data.expertise.cases.map((caseItem, index) => (
              <div key={index} className="md:flex md:items-start md:space-x-8">
                 <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl font-bold rounded-full bg-blue-500 text-white mb-4 md:mb-0">
                    {index + 1}
                 </div>
                 <div className="md:flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{caseItem.label}</h3>
                    <p className="text-base text-slate-700">{caseItem.description}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGIE DE DÉCLENCHEMENT */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl font-bold text-white mb-4">{data.technology.title}</h2>
             <p className="text-lg text-slate-300">Nous utilisons une combinaison de satellites mondiaux et de modèles climatiques éprouvés pour garantir la précision et l'intégrité de chaque index.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.technology.sources.map((source, index) => (
              <div key={index} className="p-4 border border-blue-500/30 bg-blue-900/40 rounded-lg text-center shadow-lg">
                <p className="text-base text-blue-300 font-medium">{source}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
             <Link 
               href={`/${currentLocale}/technology`}
               className="text-sm font-semibold text-white hover:text-blue-300 underline"
             >
                En savoir plus sur notre technologie globale &rarr;
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}