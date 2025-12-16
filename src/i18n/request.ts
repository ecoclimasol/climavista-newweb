import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({requestLocale}) => {
  // On récupère la locale demandée, ou on met 'en' par défaut si indéfinie
  let locale = await requestLocale;
 
  // Liste des locales valides
  const supportedLocales = ['en', 'fr', 'es', 'pt'];

  // Si la locale n'est pas valide, on force 'fr' ou 'en'
  if (!locale || !supportedLocales.includes(locale)) {
    locale = 'fr';
  }
 
  return {
    locale,
    // On charge le fichier JSON correspondant
    messages: (await import(`../messages/${locale}/home.json`)).default
  };
});