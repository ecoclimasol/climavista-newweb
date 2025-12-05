'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function IndicatorRequestPage() {
    const t = useTranslations('IndicatorRequest');
    const params = useParams();
    const router = useRouter();
    const indicatorId = params.id as string;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        function: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simuler l'envoi (remplacer par votre API réelle)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Ici, vous pouvez envoyer les données à votre backend
        // et générer/envoyer le lien PDF par email

        setSubmitted(true);
        setIsSubmitting(false);
    };

    const getIndicatorTitle = () => {
        return t(`${indicatorId}_full_name`);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        {t('success_title')}
                    </h2>
                    <p className="text-gray-600 mb-6">
                        {t('success_message')}
                    </p>
                    <Link 
                        href="/"
                        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
                    >
                        {t('back_home')}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Bouton retour */}
                <Link 
                    href="/"
                    className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    {t('back')}
                </Link>

                {/* Carte formulaire */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        {getIndicatorTitle()}
                    </h1>
                    <p className="text-gray-600 mb-8">
                        {t('form_intro')}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Prénom */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                {t('first_name')} *
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>

                        {/* Nom */}
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                {t('last_name')} *
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                {t('email')} *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>

                        {/* Fonction */}
                        <div>
                            <label htmlFor="function" className="block text-sm font-medium text-gray-700 mb-2">
                                {t('function')} *
                            </label>
                            <input
                                type="text"
                                id="function"
                                name="function"
                                required
                                value={formData.function}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>

                        {/* Bouton submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? t('submitting') : t('submit')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}