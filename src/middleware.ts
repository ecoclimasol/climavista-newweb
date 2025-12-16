import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // La liste des langues que vous supportez
  locales: ['en', 'fr', 'es', 'pt'],
 
  // La langue par défaut si l'utilisateur arrive sur "/"
  defaultLocale: 'fr'
});
 
export const config = {
  // Cette ligne permet au middleware de s'activer sur la racine "/"
  // et d'ignorer les fichiers statiques (images, css, etc.)
  matcher: ['/', '/(fr|en|es|pt)/:path*']
};