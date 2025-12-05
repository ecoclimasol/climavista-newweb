"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function VitiScorePage() {
const t = useTranslations("Vitiscore");
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* HERO */}
        <section className="text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t("hero_title")}
          </h1>

          <p className="text-lg md:text-xl text-slate-600">
            {t("hero_subtitle")}
          </p>

          <p className="text-sm md:text-base text-slate-500">
            {t("hero_context")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button className="rounded-full px-6 py-3 text-sm font-semibold bg-sky-700 text-white hover:bg-sky-800 transition">
              {t("hero_cta_analyze")}
            </button>
            <button className="rounded-full px-6 py-3 text-sm font-semibold border border-sky-700 text-sky-700 bg-white hover:bg-sky-50 transition">
              {t("hero_cta_report")}
            </button>
          </div>
        </section>

        {/* QU’EST-CE QUE VITISCORE ? */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("what_title")}
            </h2>
            <p className="text-slate-700">
              {t("what_intro")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-2">
              <h3 className="text-lg font-semibold">
                {t("what_abs_title")}
              </h3>
              <p className="text-sm text-slate-700">
                {t("what_abs_desc")}
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-2">
              <h3 className="text-lg font-semibold">
                {t("what_avg_title")}
              </h3>
              <p className="text-sm text-slate-700">
                {t("what_avg_desc")}
              </p>
            </div>
          </div>

          <p className="text-sm md:text-base text-slate-700">
            {t("what_conclusion")}
          </p>
        </section>

        {/* COMMENT VITISCORE EST-IL CALCULÉ ? */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("how_title")}
            </h2>
            <p className="text-slate-700">
              {t("how_intro")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndicatorCard
              title="ARI"
              subtitle={t("indicator_ari_subtitle")}
              description={t("indicator_ari_desc")}
            />
            <IndicatorCard
              title="CRI"
              subtitle={t("indicator_cri_subtitle")}
              description={t("indicator_cri_desc")}
            />
            <IndicatorCard
              title="CORI"
              subtitle={t("indicator_cori_subtitle")}
              description={t("indicator_cori_desc")}
            />
            <IndicatorCard
              title="BRI"
              subtitle={t("indicator_bri_subtitle")}
              description={t("indicator_bri_desc")}
            />
            <IndicatorCard
              title="WARI"
              subtitle={t("indicator_wari_subtitle")}
              description={t("indicator_wari_desc")}
            />
          </div>
        </section>

        {/* CE QUE NOUS ANALYSONS */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("analyze_title")}
          </h2>
          <ul className="space-y-3 text-slate-700">
            <BulletItem>{t("analyze_item_1")}</BulletItem>
            <BulletItem>{t("analyze_item_2")}</BulletItem>
            <BulletItem>{t("analyze_item_3")}</BulletItem>
            <BulletItem>{t("analyze_item_4")}</BulletItem>
          </ul>
        </section>

        {/* USAGES CLÉS */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("uses_title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              title={t("uses_benchmark_title")}
              description={t("uses_benchmark_desc")}
            />
            <FeatureCard
              title={t("uses_strategy_title")}
              description={t("uses_strategy_desc")}
            />
            <FeatureCard
              title={t("uses_kpi_title")}
              description={t("uses_kpi_desc")}
            />
            <FeatureCard
              title={t("uses_hr_title")}
              description={t("uses_hr_desc")}
            />
          </div>
        </section>

        {/* POUR QUI ? */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("audience_title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <AudienceCard
              title={t("audience_groups_title")}
              description={t("audience_groups_desc")}
            />
            <AudienceCard
              title={t("audience_domains_title")}
              description={t("audience_domains_desc")}
            />
            <AudienceCard
              title={t("audience_interprof_title")}
              description={t("audience_interprof_desc")}
            />
          </div>
        </section>

        {/* CE QUE VOUS RECEVEZ */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("deliverables_title")}
          </h2>
          <ul className="space-y-3 text-slate-700">
            <BulletItem>{t("deliverables_item_1")}</BulletItem>
            <BulletItem>{t("deliverables_item_2")}</BulletItem>
            <BulletItem>{t("deliverables_item_3")}</BulletItem>
            <BulletItem>{t("deliverables_item_4")}</BulletItem>
          </ul>
        </section>

        {/* DONNÉES & COUVERTURE */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("data_title")}
          </h2>
          <p className="text-slate-700">
            {t("data_text")}
          </p>
        </section>

        {/* INTÉGRATIONS & LIVRABLES */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("integrations_title")}
          </h2>
          <ul className="space-y-3 text-slate-700">
            <BulletItem>{t("integrations_item_1")}</BulletItem>
            <BulletItem>{t("integrations_item_2")}</BulletItem>
          </ul>
        </section>

        {/* CTA FINAL */}
        <section className="space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("cta_title")}
          </h2>
          <p className="max-w-3xl mx-auto text-slate-700">
            {t("cta_text")}
          </p>
          <button className="rounded-full px-8 py-3 text-sm font-semibold bg-sky-700 text-white hover:bg-sky-800 transition">
            {t("cta_button")}
          </button>
        </section>

        {/* MENTION DE TRANSPARENCE */}
        <section className="border-t border-slate-200 pt-6">
          <p className="text-xs text-slate-500">
            {t("disclaimer_text")}
          </p>
        </section>
      </div>
    </main>
  );
}

/* Small presentational components */

type IndicatorCardProps = {
  title: string;
  subtitle: string;
  description: string;
};

function IndicatorCard({ title, subtitle, description }: IndicatorCardProps) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 space-y-2">
      <div className="inline-flex items-center justify-center rounded-full bg-sky-50 text-sky-700 text-xs font-semibold px-3 py-1">
        {title}
      </div>
      <h3 className="text-sm font-semibold">{subtitle}</h3>
      <p className="text-xs text-slate-700 leading-relaxed">{description}</p>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 space-y-2">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-sm text-slate-700">{description}</p>
    </div>
  );
}

type AudienceCardProps = {
  title: string;
  description: string;
};

function AudienceCard({ title, description }: AudienceCardProps) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 space-y-2">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-sm text-slate-700">{description}</p>
    </div>
  );
}

type BulletItemProps = {
  children: React.ReactNode;
};

function BulletItem({ children }: BulletItemProps) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1 h-2 w-2 rounded-full bg-sky-600" />
      <span className="text-sm md:text-base">{children}</span>
    </li>
  );
}
