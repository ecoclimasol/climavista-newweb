import { useTranslations } from 'next-intl';
import { 
    Microscope, 
    FlaskConical, 
    CalendarRange, 
    Map, 
    LayoutDashboard, 
    Activity, 
    Grape, 
    Smartphone 
} from 'lucide-react';
import { COLORS } from '@/config/constants';

export default function ServicesSection() {
    const t = useTranslations('Services');

    const services = [
        { id: 'service_1', icon: Microscope },
        { id: 'service_2', icon: FlaskConical },
        { id: 'service_3', icon: CalendarRange },
        { id: 'service_4', icon: Map },
        { id: 'service_5', icon: LayoutDashboard },
    ];

    const products = [
        { id: 'product_1', icon: Activity },
        { id: 'product_2', icon: Grape },
        { id: 'product_3', icon: Smartphone },
    ];

    return (
        <section className="py-20 bg-white" id="services">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* --- PARTIE 1 : SERVICES --- */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                        {t('main_title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('sub_title')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {services.map((service) => (
                        <div key={service.id} className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <div className="mb-6 inline-flex p-3 rounded-lg bg-white shadow-sm w-fit">
                                <service.icon size={32} style={{ color: COLORS['agri-green'] }} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {t(`${service.id}_title`)}
                            </h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                {t(`${service.id}_desc`)}
                            </p>
                            <div className="pt-6 border-t border-gray-200 mt-auto">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                                    {t('target_users_label')}
                                </span>
                                <p className="text-sm font-medium" style={{ color: COLORS['agri-blue'] }}>
                                    {t(`${service.id}_targets`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- PARTIE 2 : PRODUITS --- */}
                <div className="bg-green-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
                    {/* Décoration de fond */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
                    
                    <div className="text-center mb-12 relative z-10">
                        <h2 className="text-3xl font-extrabold mb-4">
                            {t('products_title')}
                        </h2>
                        <p className="text-green-100 max-w-2xl mx-auto">
                            {t('products_sub_title')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 bg-white rounded-lg text-green-900">
                                        <product.icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">
                                        {t(`${product.id}_title`)}
                                    </h3>
                                </div>
                                <p className="text-sm text-green-50 leading-relaxed">
                                    {t(`${product.id}_desc`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}