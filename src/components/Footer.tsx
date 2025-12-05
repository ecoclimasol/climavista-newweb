"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* LOGO + MISSION */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            {t("brand_name")}
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            {t("mission")}
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
            {t("nav_title")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                {t("nav_home")}
              </Link>
            </li>
            <li>
              <Link href="/vitiscore" className="hover:text-white">
                {t("nav_vitiscore")}
              </Link>
            </li>
            <li>
              <Link href="/indicateurs" className="hover:text-white">
                {t("nav_indicators")}
              </Link>
            </li>
            <li>
              <Link href="/mission" className="hover:text-white">
                {t("nav_mission")}
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
            {t("contact_title")}
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>{t("contact_address")}</li>
            <li>{t("contact_phone")}</li>
            <li>
              ✉️{" "}
              <a
                href="mailto:contact@agritemis.com"
                className="hover:text-white"
              >
                {t("contact_email")}
              </a>
            </li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
            {t("follow_title")}
          </h4>
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://www.linkedin.com/company/agritemis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:contact@agritemis.com"
              className="hover:text-white"
            >
              <FaEnvelope />
            </a>
          </div>

          <p className="text-xs text-slate-500">
            {t("follow_text")}
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-700 px-6 py-4 text-center text-xs text-slate-500">
        © {currentYear} AGRITEMIS — {t("copyright_suffix")}
      </div>
    </footer>
  );
}
