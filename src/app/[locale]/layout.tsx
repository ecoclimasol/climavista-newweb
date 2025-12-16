import Image from "next/image"; 
import type { ReactNode } from "react";
import Link from "next/link";
// Import existant pour la navbar et le type de locale
import { getNavbarDictionary, type SupportedLocale } from "@/i18n/getHomeDictionary";
import "../globals.css"; 
import LanguageSwitcher from '@/components/LanguageSwitcher'; 

// ⚠️ NOUVEAUX IMPORTS POUR LE FOOTER
import { getFooterDictionary } from "@/i18n/getFooterDictionary";
import Footer from "@/components/Footer"; // Assurez-vous que le chemin est correct

const SUPPORTED = ["en", "fr", "es", "pt"] as const;

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
  const currentLocale = SUPPORTED.includes(locale) ? locale : "fr";
  
  // 1. CHARGEMENT EXISTANT DES DONNÉES DE LA NAVBAR
  const navT = await getNavbarDictionary(currentLocale);
  
  // 2. CHARGEMENT DES DONNÉES DU FOOTER
  const footerData = await getFooterDictionary(currentLocale);

  return (
    <html lang={currentLocale}>
      <body className="bg-slate-50 text-slate-900 antialiased">
        
        {/* HEADER EXISTANT (inchangé) */}
        <header className="absolute top-0 left-0 right-0 z-50 w-full border-b border-white/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

            {/* 2. NOUVEAU BLOC LOGO AVEC IMAGE */}
            <Link href={`/${currentLocale}`} className="flex items-center group">
              <Image
                src="/logo-climavista-blanco.png" 
                alt="ClimaVista Logo" 
                // Ces props sont nécessaires pour Next/Image (ajustez si besoin)
                width={150} 
                height={30} 
                className="w-[150px] h-auto object-contain"
              />
            </Link>

            {/* Navigation */}
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

            {/* CTA & LANG SWITCHER (Nouvelle implémentation) */}
            <div className="flex items-center gap-4">
              
              {/* NOUVEAU CTA "Connect" */}
              <a 
                href="https://seguros.climavista.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-slate-900 shadow-md transition-colors hover:bg-slate-100 hidden md:block"
              >
                Connect
              </a>
              
              {/* Le sélecteur de langue */}
              <LanguageSwitcher /> 
              
            </div>
          </div>
        </header>

        <main className="min-h-screen w-full">
            {children}
        </main>

        {/* ⚠️ NOUVEAU FOOTER: Remplacement de l'ancien footer inline */}
        <Footer data={footerData.footer} locale={currentLocale} />
      </body>
    </html>
  );
}