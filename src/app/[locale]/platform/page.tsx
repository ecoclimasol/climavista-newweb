import {
  getHomeDictionary,
  type SupportedLocale
} from "@/i18n/getHomeDictionary";

import LifecycleSection from "@/components/LifecycleSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import ScienceTechSection from "@/components/ScienceTechSection";
import ValueProposition from "@/components/ValueProposition";
import HeroSection from "@/components/home/HeroSection";

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

      <section className="py-12 md:py-16 bg-white">
       <ValueProposition data={t.valueProposition} />
       <LifecycleSection data={t.lifecycle} />
       <ScienceTechSection data={t.scienceTech} />
      </section>
 
      <FinalCTASection data={t.finalCta} />
    </div>
  );
}