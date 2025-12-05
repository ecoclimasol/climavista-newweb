import { useTranslations } from 'next-intl';
import { BarChart3, Scale, Zap } from 'lucide-react';
import { COLORS } from '@/config/constants';

export default function ValuePropositionSection() {
  const t = useTranslations('Landing');

  return (
    <section className="py-20 text-white" style={{ backgroundColor: COLORS['agri-green'] }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          
          {/* Étape 1 : Mesurer */}
          <div className="flex flex-col items-center group">
            <div className="p-5 rounded-full mb-6 bg-white/10 group-hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm">
              <BarChart3 size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('value_prop_measure_title')}</h3>
            <p className="text-green-100 leading-relaxed max-w-xs">
              {t('value_prop_measure_desc')}
            </p>
          </div>

          {/* Étape 2 : Comparer */}
          <div className="flex flex-col items-center group">
            <div className="p-5 rounded-full mb-6 bg-white/10 group-hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm">
              <Scale size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('value_prop_compare_title')}</h3>
            <p className="text-green-100 leading-relaxed max-w-xs">
              {t('value_prop_compare_desc')}
            </p>
          </div>

          {/* Étape 3 : Agir */}
          <div className="flex flex-col items-center group">
            <div className="p-5 rounded-full mb-6 bg-white/10 group-hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm">
              <Zap size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('value_prop_act_title')}</h3>
            <p className="text-green-100 leading-relaxed max-w-xs">
              {t('value_prop_act_desc')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}