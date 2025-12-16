import 'server-only';
import type { SupportedLocale } from './getHomeDictionary'; // Assurez-vous d'importer votre type de locale

const dictionaries = {
  en: () => import('@/messages/en/footer.json').then(module => module.default),
  fr: () => import('@/messages/fr/footer.json').then(module => module.default),
  es: () => import('@/messages/es/footer.json').then(module => module.default),
  pt: () => import('@/messages/pt/footer.json').then(module => module.default),
};

export const getFooterDictionary = async (locale: SupportedLocale) => {
  if (locale === 'en') return dictionaries.en();
  if (locale === 'fr') return dictionaries.fr();
  if (locale === 'es') return dictionaries.es();
  if (locale === 'pt') return dictionaries.pt();
  return dictionaries.en();
};