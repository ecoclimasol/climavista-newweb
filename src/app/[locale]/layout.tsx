import Image from "next/image"; 
import type { ReactNode } from "react";
import Link from "next/link";
import { getNavbarDictionary, type SupportedLocale } from "@/i18n/getHomeDictionary";
import "../globals.css"; 
import LanguageSwitcher from '@/components/LanguageSwitcher'; 

// Imports du Footer
import { getFooterDictionary } from "@/i18n/getFooterDictionary";
import Footer from "@/components/Footer";

// Langues supportées
const SUPPORTED = ["en", "fr", "es", "pt"] as const;

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  // REMPLACEZ PAR CECI :
  params: Promise<{ locale: string }>; 
}) {
  const resolvedParams = await params;
  const localeFromParams = resolvedParams.locale;

  // Validation de la locale : si inconnue, on force "fr"
  const currentLocale: SupportedLocale = (SUPPORTED as readonly string[]).includes(localeFromParams)
    ? (localeFromParams as SupportedLocale)
    : "fr";
  
  // Chargement des dictionnaires
  const navT = await getNavbarDictionary(currentLocale);
  
  // 2. Récupération flexible des données du Footer
  // On utilise 'any' temporairement pour vérifier la structure sans blocage TS
  const rawFooterData: any = await getFooterDictionary(currentLocale);
  
  // 3. Extraction intelligente : on prend .footer s'il existe, sinon on prend l'objet entier
  // Cela résout le conflit de structure entre vos fichiers JSON
  const finalFooterData = rawFooterData.footer ? rawFooterData.footer : rawFooterData;

  return (
    <html lang={currentLocale}>
      <body className="bg-slate-50 text-slate-900 antialiased">
        
        {/* HEADER */}
        <header className="absolute top-0 left-0 right-0 z-50 w-full border-b border-white/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

            {/* Logo */}
            <Link href={`/${currentLocale}`} className="flex items-center group">
              <Image
                src="/logo-climavista-blanco.png" 
                alt="ClimaVista Logo" 
                width={150} 
                height={30} 
                className="w-[150px] h-auto object-contain"
              />
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden space-x-6 text-sm font-semibold text-white lg:flex">
              <Link href={`/${currentLocale}`} className="hover:text-blue-300 transition-colors">
                {navT.home}
              </Link>
              <Link href={`/${currentLocale}/parametric`} className="hover:text-blue-300 transition-colors">
                {navT.parametric}
              </Link>
              <Link href={`/${currentLocale}/early-warning`} className="hover:text-blue-300 transition-colors">
                {navT.earlywarning}
              </Link>
              <Link href={`/${currentLocale}/technology`} className="hover:text-blue-300 transition-colors">
                {navT.technology}
              </Link>
              <Link href={`/${currentLocale}/about`} className="hover:text-blue-300 transition-colors">
                {navT.about}
              </Link>
            </nav>

            {/* CTA & Langue */}
            <div className="flex items-center gap-4">
              <a 
                href="https://seguros.climavista.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-slate-900 shadow-md transition-colors hover:bg-slate-100 hidden md:block"
              >
                Connect
              </a>
              <LanguageSwitcher /> 
            </div>
          </div>
        </header>

        {/* CONTENU PRINCIPAL */}
        <main className="min-h-screen w-full">
            {children}
        </main>

        {/* FOOTER (avec les données nettoyées) */}
        <Footer data={finalFooterData} locale={currentLocale} />

      </body>
    </html>
  );
}