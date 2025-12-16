import 'server-only';
import type { SupportedLocale } from './getHomeDictionary'; // Assurez-vous d'importer votre type de locale

const dictionaries = {
  en: () => import('@/messages/en/early-warning.json').then(module => module.default),
  fr: () => import('@/messages/fr/early-warning.json').then(module => module.default),
  es: () => import('@/messages/es/early-warning.json').then(module => module.default),
  pt: () => import('@/messages/pt/early-warning.json').then(module => module.default),
};

export const getEarlyWarningDictionary = async (locale: SupportedLocale) => {
  if (locale === 'en') return dictionaries.en();
  if (locale === 'fr') return dictionaries.fr();
  if (locale === 'es') return dictionaries.es();
  if (locale === 'pt') return dictionaries.pt();
  return dictionaries.en();
};