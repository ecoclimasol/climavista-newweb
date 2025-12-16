import {
  getHomeDictionary,
  type SupportedLocale
} from "@/i18n/getHomeDictionary";

import HeroSection from "@/components/home/HeroSection";
import ClientLogoCarousel from "@/components/home/ClientLogoCarousel";
import CoreServicesSection from "@/components/home/CoreServicesSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import FinalCTASection from "@/components/home/FinalCTASection";

export default async function HomePage({
  params
}: {
  // 1. On change le type ici pour indiquer que c'est une Promise
  params: Promise<{ locale: SupportedLocale }>;
}) {
  // 2. On attend (await) la résolution des paramètres avant de les utiliser
  const { locale } = await params;

  // 3. On utilise la variable "locale" extraite
  const t = await getHomeDictionary(locale);

  return (
    <div className="w-full flex flex-col"> {/* Retrait de gap-20 pour contrôler l'espacement */}
      <HeroSection data={t.hero} />

      {/* 2. LOGO SECTION (Nouveau) */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="text-xl font-semibold text-slate-500 mb-8 uppercase tracking-wider">
            {t.logos.trustedTitle}
          </h3>
        </div>
        <ClientLogoCarousel />
      </section>

      <section className="py-12 md:py-16 bg-white">
       <CoreServicesSection data={t.coreServices} />
       <BenefitsSection data={t.benefits} />
      </section>
 
      <FinalCTASection data={t.finalCta} />
    </div>
  );
}