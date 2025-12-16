// src/i18n/getParametricDictionary.ts
import 'server-only';
import type { SupportedLocale } from './getHomeDictionary'; // Assurez-vous d'importer votre type de locale

// Mappage des imports pour chaque langue (chemin: messages/[lang]/parametric.json)
const dictionaries = {
  en: () => import('@/messages/en/parametric.json').then(module => module.default),
  fr: () => import('@/messages/fr/parametric.json').then(module => module.default),
  es: () => import('@/messages/es/parametric.json').then(module => module.default),
  pt: () => import('@/messages/pt/parametric.json').then(module => module.default),
};

// Fonction principale pour obtenir le dictionnaire
export const getParametricDictionary = async (locale: SupportedLocale) => {
  if (locale === 'en') {
    return dictionaries.en();
  }
  if (locale === 'fr') {
    return dictionaries.fr();
  }
  if (locale === 'es') {
    return dictionaries.es();
  }
  if (locale === 'pt') {
    return dictionaries.pt();
  }
  // Fallback si une locale non supportée est passée
  return dictionaries.en(); 
};