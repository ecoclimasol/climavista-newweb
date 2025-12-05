import { useTranslations } from 'next-intl';

export default function ProblemStatementSection() {
    const t = useTranslations('Landing');

    return (
        <section className="py-16 bg-gray-50 rounded-xl mt-16 shadow-lg">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-4xl font-extrabold text-center text-green-700 mb-8">
                    {t('problem_title')}
                </h2>
            </div>
        </section>
    );
}