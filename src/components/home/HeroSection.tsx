// src/components/home/HeroSection.tsx
import React from 'react';
import Link from 'next/link';
import HeroImageCarousel from './HeroImageCarousel'; 

// --- 1. DÉFINITION DES TYPES (C'est ce qu'il manquait) ---

// Type pour un élément de la liste "highlights" (insights)
interface HeroHighlight {
  title: string;
  description?: string;
}

// Type pour l'objet de données complet venant du JSON
export interface HeroData {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta?: string;
  insightsTitle?: string;
  viewMore?: string;
  highlights?: HeroHighlight[];
}

// Type pour les props du composant
export interface HeroSectionProps {
  data: HeroData;
}

// --- 2. LE COMPOSANT ---

export default function HeroSection({ data }: HeroSectionProps) {
  // On déstructure les données pour les utiliser facilement
  const { 
    badge, title, subtitle, primaryCta, secondaryCta, 
    highlights, insightsTitle, viewMore 
  } = data;

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 text-white min-h-[85vh] flex items-center pt-20">
      
      {/* NOUVEAU BLOC CARROUSEL */}
      <HeroImageCarousel />
      
      {/* Overlays pour lisibilité (Ils se superposent au carrousel) */}
      <div className="absolute inset-0 z-10 bg-slate-900/20 mix-blend-multiply" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />

      {/* CONTENU (Doit être au-dessus des overlays, z-20) */}
      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:items-start md:justify-between">
        
        {/* --- COLONNE GAUCHE --- */}
        <div className="max-w-2xl space-y-8 pt-8">
          {badge && (
            <div className="inline-flex items-center border-l-2 border-blue-400 pl-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
              {badge}
            </div>
          )}
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-lg text-lg text-slate-200 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/contact" className="group relative overflow-hidden rounded-sm bg-white px-8 py-3 text-sm font-bold text-slate-900 transition-all hover:bg-blue-50">
              <span className="relative z-10">{primaryCta}</span>
            </Link>
             {/* Bouton secondaire optionnel */}
            {secondaryCta && (
                <Link href="/technology" className="rounded-sm border border-white/30 px-8 py-3 text-sm font-bold transition-all hover:bg-white/10">
                    {secondaryCta}
                </Link>
            )}
         </div>
        </div>

        {/* --- COLONNE DROITE : Insights Card --- */}
        <div className="w-full max-w-md shrink-0 md:mt-12">
           <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-2xl">
            <div className="border-b border-white/10 bg-white/5 px-6 py-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300">
                {insightsTitle || "Portfolio Insights"}
              </h3>
            </div>
            
             <div className="p-6">
              {highlights && highlights.length > 0 ? (
                <ul className="space-y-6">
                  {highlights.map((item, index) => (
                    <li key={index} className="group cursor-pointer">
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-white decoration-blue-400 underline-offset-4 group-hover:underline">
                          {item.title}
                        </span>
                        {item.description && (
                          <p className="text-sm text-slate-300 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-4 text-sm text-slate-200">
                  <p>ClimaVista Business Intelligence Platform</p>
                </div>
              )}
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}