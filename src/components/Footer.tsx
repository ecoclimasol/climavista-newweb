// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

// ⚠️ DÉFINITION DE L'INTERFACE (ASSUREZ-VOUS QU'ELLE CORRESPOND AU JSON)
interface FooterData {
  mission: string;
  columns: {
    solutions: string;
    tech: string;
    contact_offices: string;
  };
  links: {
    home: string;
    bi: string;
    parametric: string;
    early_warning: string;
    technology: string;
    contact: string;
    legal: string;
    privacy: string;
  };
  offices: {
    americas_title: string;
    americas_address: string;
    global_title: string;
    global_address: string;
    email: string;
  };
  copyright: string;
}

interface FooterProps {
  data: FooterData;
  locale: string; 
}

// Fonction utilitaire pour générer des liens de navigation
const NavLink = ({ href, label, locale }: { href: string, label: string, locale: string }) => (
  <Link 
    href={`/${locale}${href}`} 
    className="text-slate-400 hover:text-blue-400 transition-colors"
  >
    {label}
  </Link>
);


const Footer: React.FC<FooterProps> = ({ data, locale }) => {
  
  // Utiliser \n pour simuler les sauts de ligne dans l'adresse
  // Utilisation de dangerouslySetInnerHTML pour injecter les <br/>
  const americasAddressFormatted = data.offices.americas_address.replace(/\n/g, '<br/>');
  const globalAddressFormatted = data.offices.global_address.replace(/\n/g, '<br/>');

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Grille principale du Footer (3 Colonnes) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-700 pb-12">
          
          {/* Colonne 1: Logo & Mission */}
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="text-2xl font-bold text-white mb-4 block">
                ClimaVista
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {data.mission}
            </p>
            {/* Renseignements généraux de contact */}
            <div className="mt-6">
                <a 
                    // Supprime le "Email : " pour l'URL mailto:
                    href={`mailto:${data.offices.email.replace('Email : ', '')}`} 
                    className="text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                    {data.offices.email}
                </a>
            </div>
          </div>
          
          {/* Colonne 2: Navigation (Solutions & Tech) */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">{data.columns.solutions}</h3>
            <ul className="space-y-3 text-sm">
                <li><NavLink href="/" label={data.links.home} locale={locale} /></li>
                <li><NavLink href="/parametric" label={data.links.parametric} locale={locale} /></li>
                <li><NavLink href="/early-warning" label={data.links.early_warning} locale={locale} /></li>
                <li><NavLink href="/bi" label={data.links.bi} locale={locale} /></li>
                <li className="pt-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{data.columns.tech}</h3>
                  <NavLink href="/technology" label={data.links.technology} locale={locale} />
                </li>
            </ul>
          </div>

          {/* Colonnes 3 & 4: Bureaux & Adresses */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Bureau Amériques (Argentine) */}
            <div>
                <h3 className="text-lg font-semibold text-white mb-4">{data.offices.americas_title}</h3>
                <address className="not-italic text-sm text-slate-400 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: americasAddressFormatted }} />
                </address>
            </div>
            {/* Bureau Global (France) */}
            <div>
                <h3 className="text-lg font-semibold text-white mb-4">{data.offices.global_title}</h3>
                 <address className="not-italic text-sm text-slate-400 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: globalAddressFormatted }} />
                 </address>
            </div>
          </div>

        </div>
        
        {/* Bande inférieure (Copyright & Légal) */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-slate-500">
          <p>{data.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <Link href={`/${locale}/legal`} className="hover:text-white transition-colors">
                {data.links.legal}
             </Link>
             <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">
                {data.links.privacy}
             </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;