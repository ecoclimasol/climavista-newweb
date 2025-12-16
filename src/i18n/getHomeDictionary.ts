// src/i18n/getHomeDictionary.ts
import enHome from "@/messages/en/home.json";
import esHome from "@/messages/es/home.json";
import frHome from "@/messages/fr/home.json";
import ptHome from "@/messages/pt/home.json";

const dict = {
  en: enHome,
  fr: frHome,
  es: esHome,
  pt: ptHome
} as const;

export type SupportedLocale = keyof typeof dict;

// On accepte n'importe quel string en entrée, et on fait un fallback sur "en"
export async function getHomeDictionary(locale: string) {
  const lang = (locale in dict ? locale : "en") as SupportedLocale;
  return dict[lang];
}

// NOUVELLE FONCTION pour la Navbar
export const getNavbarDictionary = async (locale: SupportedLocale) => {
  const dict = await import(`@/messages/${locale}/navbar.json`);
  return dict.default;
};