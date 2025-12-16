import 'server-only';
import type { SupportedLocale } from './getHomeDictionary';

const dictionaries = {
  en: () => import('@/messages/en/technology.json').then(module => module.default),
  fr: () => import('@/messages/fr/technology.json').then(module => module.default),
  es: () => import('@/messages/es/technology.json').then(module => module.default),
  pt: () => import('@/messages/pt/technology.json').then(module => module.default),
};

export const getTechnologyDictionary = async (locale: SupportedLocale) => {
  if (locale === 'en') return dictionaries.en();
  if (locale === 'fr') return dictionaries.fr();
  if (locale === 'es') return dictionaries.es();
  if (locale === 'pt') return dictionaries.pt();
  return dictionaries.en();
};