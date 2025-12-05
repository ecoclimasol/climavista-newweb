import { useTranslations } from 'next-intl';
import Image from 'next/image';
// Nous utilisons le Link client que nous avons créé dans l'étape précédente
import { Link } from '@/i18n/navigation.client';

import HeroSection from '@/components/HeroSection';
import SocialProofSection from '@/components/SocialProofSection';
import ProblemStatementSection from '@/components/ProblemStatementSection';
import IndicatorsSection from '@/components/IndicatorsSection';
import BenefitsSection from '@/components/BenefitsSection';
import CtaFinalSection from '@/components/CtaFinalSection';
import SolutionSection from '@/components/SolutionSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import ServicesSection from '@/components/ServicesSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <SocialProofSection />
      <SolutionSection />
      <ServicesSection />
      <ValuePropositionSection />
      <ProblemStatementSection />
      <IndicatorsSection />
      <BenefitsSection />
      <CtaFinalSection />
    </main>
  );
}