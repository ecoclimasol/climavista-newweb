import React from 'react';
import Link from 'next/link';
import { getTechnologyDictionary, type SupportedLocale } from "@/i18n/getTechnologyDictionay"; 


export default async function TechnologyPage({ params }: { params: { locale: SupportedLocale } }) {
  const { locale } = params;
  const data = await getTechnologyDictionary(locale);

  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 bg-slate-900 text-white overflow-hidden">
         {/* Background Tech Grid Effect */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-transparent to-slate-900"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 text-sm font-semibold uppercase tracking-wider">
            R&D and Innovation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
            {data.hero.title}
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. DATA LAYER (GRID) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{data.layer1_data.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{data.layer1_data.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.layer1_data.sources.map((source: any, index: number) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-indigo-500 transition-colors group">
                <div className="w-12 h-12 mb-4 rounded-lg bg-white shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📡
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{source.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{source.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AI & ML LAYER (Feature Section) */}
      <section className="py-24 bg-indigo-950 text-white relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-indigo-400">AI-Driven</span> Precision.
              </h2>
              <p className="text-lg text-indigo-100 mb-8">
                {data.layer2_ai.subtitle}
              </p>
              
              <div className="space-y-6">
                {data.layer2_ai.features.map((feature: any, index: number) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold border border-indigo-500/30">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{feature.title}</h4>
                      <p className="text-indigo-200 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Side (Abstract representation of AI) */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 border border-indigo-500/30 p-8 flex flex-col justify-between shadow-2xl">
                <div className="space-y-4">
                   <div className="h-2 w-3/4 bg-indigo-500/30 rounded animate-pulse"></div>
                   <div className="h-2 w-1/2 bg-indigo-500/30 rounded animate-pulse delay-75"></div>
                   <div className="h-2 w-full bg-indigo-500/30 rounded animate-pulse delay-150"></div>
                </div>
                <div className="text-center">
                   <div className="text-6xl mb-2">🧠</div>
                   <div className="text-indigo-300 font-mono text-sm">Processing...</div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-8">
                   {[...Array(9)].map((_, i) => (
                      <div key={i} className={`h-12 rounded bg-indigo-500/${Math.floor(Math.random() * 40 + 10)}`}></div>
                   ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MODELING & VALIDATION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{data.layer3_models.title}</h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              {data.layer3_models.description}
            </p>
            
            {/* Logos des modèles (Simulés par du texte pour l'instant) */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
               <span className="px-4 py-2 font-bold text-slate-600 bg-white border rounded">NOAA GFS</span>
               <span className="px-4 py-2 font-bold text-slate-600 bg-white border rounded">ECMWF IFS</span>
               <span className="px-4 py-2 font-bold text-slate-600 bg-white border rounded">DWD ICON</span>
               <span className="px-4 py-2 font-bold text-slate-600 bg-white border rounded">UKMO</span>
            </div>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
             <h3 className="text-xl font-bold text-slate-900 mb-4">✅ {data.validation.title}</h3>
             <p className="text-slate-600">{data.validation.text}</p>
          </div>

        </div>
      </section>

    </div>
  );
}