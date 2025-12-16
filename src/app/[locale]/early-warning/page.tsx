import React from 'react';
import Link from 'next/link';
import { getEarlyWarningDictionary, type SupportedLocale } from "@/i18n/getEarlyWarningDictionay"; 

// --- Icônes (Placeholders) ---
const getIcon = (name: string) => {
  switch (name) {
    case 'anticipation': return <span className="text-4xl">⏳</span>;
    case 'precision': return <span className="text-4xl">🎯</span>;
    case 'action': return <span className="text-4xl">⚡</span>;
    default: return <span className="text-4xl">✨</span>;
  }
};

export default async function EarlyWarningPage({ params }: { params: { locale: SupportedLocale } }) {
  const { locale } = params;
  const data = await getEarlyWarningDictionary(locale);

  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      {/* Dégagement de navbar (pt-32) et fond sombre pour l'impact */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 bg-slate-900 text-white overflow-hidden">
        {/* Effet de fond subtil (radar) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-sm font-semibold uppercase tracking-wider">
            EWS Technology
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {data.hero.title}
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            {data.hero.subtitle}
          </p>
          <Link 
            href={data.hero.ctaLink}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25"
          >
            {data.hero.ctaLabel}
          </Link>
        </div>
      </section>

      {/* 2. CHALLENGE SECTION (Reactive vs Proactive) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{data.challenge.title}</h2>
            <p className="text-lg text-slate-600">{data.challenge.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.challenge.points.map((point: any, index: number) => (
              <div key={index} className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-blue-600 font-bold text-xl mb-3">0{index + 1}.</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION (3 Pillars) */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">{data.solution.title}</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">{data.solution.subtitle}</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {data.solution.steps.map((step: any, index: number) => (
               <div key={index} className="flex flex-col items-center text-center p-6">
                 <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 text-blue-600">
                   {getIcon(step.icon)}
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                 <p className="text-slate-600">{step.description}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 4. TECH DEEP DIVE (Ensemble Approach) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {data.tech.title}
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {data.tech.description}
              </p>
              
              {/* Stats Highlight */}
              <div className="flex gap-8 border-t border-slate-700 pt-8">
                <div>
                  <div className="text-4xl font-bold text-white">200+</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Models</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">6h</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Updates</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">12h+</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Lead Time</div>
                </div>
              </div>
            </div>

            {/* Models Grid Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Powered by Global Leaders</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.tech.models.map((model: any, index: number) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
                    <div className="h-2 w-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0"></div>
                    <div>
                      <div className="font-bold text-white">{model.name}</div>
                      <div className="text-xs text-slate-400">{model.origin} • {model.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTEGRATION (API Flow) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{data.integration.title}</h2>
            <p className="text-slate-600">{data.integration.subtitle}</p>
          </div>

          {/* Flow Diagram Representation */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
            
            {/* Step 1 */}
            <div className="w-full md:w-1/3 p-6 bg-slate-50 border border-slate-200 rounded-xl text-center z-10">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-bold text-slate-900">{data.integration.flow.step1}</h3>
            </div>

            {/* Connector Arrow (Desktop) */}
            <div className="hidden md:flex flex-col items-center justify-center w-24 text-blue-500">
               <span className="text-sm font-bold mb-1">API</span>
               <div className="h-0.5 w-full bg-blue-500"></div>
               <div className="w-2 h-2 rounded-full bg-blue-500 -mt-1.5 ml-auto"></div>
            </div>
            
            {/* Step 2 (Central) */}
            <div className="w-full md:w-1/3 p-8 bg-blue-600 text-white rounded-xl shadow-xl text-center transform scale-105 z-20">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="font-bold text-xl">{data.integration.flow.step2}</h3>
            </div>

            {/* Connector Arrow (Desktop) */}
            <div className="hidden md:flex flex-col items-center justify-center w-24 text-blue-500">
               <span className="text-sm font-bold mb-1">Alerts</span>
               <div className="h-0.5 w-full bg-blue-500"></div>
               <div className="w-2 h-2 rounded-full bg-blue-500 -mt-1.5 ml-auto"></div>
            </div>

            {/* Step 3 */}
            <div className="w-full md:w-1/3 p-6 bg-slate-50 border border-slate-200 rounded-xl text-center z-10">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-slate-900">{data.integration.flow.step3}</h3>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TRUST / FOOTER CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="mb-8">
            <span className="text-4xl">🤝</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            {data.trust.title}
          </h2>
          <p className="text-lg text-slate-600 mb-10 italic">
            "{data.trust.text}"
          </p>
          <Link 
             href="/contact"
             className="inline-block px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Contact our Sales Team
          </Link>
        </div>
      </section>

    </div>
  );
}