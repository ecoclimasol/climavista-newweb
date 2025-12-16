// components/home/FeaturedModulesSection.tsx
type FeaturedModulesSectionProps = {
  data: {
    title: string;
    subtitle: string;
    modules: {
      name: string;
      description: string;
      href: string;
    }[];
    ctaLabel: string;
  };
};

import Link from "next/link";

export default function FeaturedModulesSection({
  data
}: FeaturedModulesSectionProps) {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">
          {data.title}
        </h2>
        <p className="text-gray-700">{data.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {data.modules.map((mod, idx) => (
          <Link
            key={idx}
            href={mod.href}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 text-sm shadow-sm transition hover:border-blue-700 hover:shadow-md"
          >
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Module
            </div>
            <div className="mb-2 font-semibold text-gray-900">
              {mod.name}
            </div>
            <p className="flex-1 text-xs text-gray-700">
              {mod.description}
            </p>
            <span className="mt-4 text-xs font-medium text-blue-700">
              Learn more →
            </span>
          </Link>
        ))}
      </div>

      <button className="text-sm font-medium text-blue-700 hover:text-blue-800">
        {data.ctaLabel} →
      </button>
    </section>
  );
}
