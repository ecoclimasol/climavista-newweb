// components/home/ScienceTechSection.tsx
type ScienceTechSectionProps = {
  data: {
    title: string;
    subtitle: string;
    blocks: {
      title: string;
      items: string[];
    }[];
    ctaLabel: string;
  };
};

export default function ScienceTechSection({ data }: ScienceTechSectionProps) {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">
          {data.title}
        </h2>
        <p className="text-gray-700">{data.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {data.blocks.map((block, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              {block.title}
            </h3>
            <ul className="space-y-2 text-xs text-gray-700">
              {block.items.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button className="text-sm font-medium text-blue-700 hover:text-blue-800">
        {data.ctaLabel} →
      </button>
    </section>
  );
}
