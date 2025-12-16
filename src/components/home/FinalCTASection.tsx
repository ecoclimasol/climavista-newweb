// components/home/FinalCTASection.tsx
type FinalCTASectionProps = {
  data: {
    title: string;
    subtitle: string;
    primaryCta: string;
  };
};

export default function FinalCTASection({ data }: FinalCTASectionProps) {
  return (
    <section className="rounded-2xl bg-blue-900 px-6 py-10 text-white md:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-3">
          <h2 className="text-2xl font-semibold">
            {data.title}
          </h2>
          <p className="text-sm text-blue-100">
            {data.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-blue-900 shadow-sm hover:bg-blue-50">
            {data.primaryCta}
          </button>
        </div>
      </div>
    </section>
  );
}
