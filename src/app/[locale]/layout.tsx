import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Image from 'next/image';
import {Link} from '@/i18n/navigation.client'; // Importe depuis notre nouveau fichier client
import "../globals.css"; // Référence au CSS global de Tailwind

// C'est ici qu'on utilise le code corrigé pour Next.js 16 (await params)
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>; 
}) {
  const { locale } = await params; // Le "await" est crucial pour Next.js 16
  
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-sans antialiased bg-gray-50 min-h-screen">
        <NextIntlClientProvider messages={messages}>
            {/* Barre de navigation : Logo et sélecteur de langue */}
            <nav className="bg-white shadow-md p-4 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Logo AGRITEMIS (top-left) */}
                    <div className="w-48 h-auto relative">
                        <Image 
                            src="/logo_agritemis.png" 
                            alt="Agritemis Logo" 
                            width={3514} 
                            height={512} 
                            style={{objectFit: "contain"}}
                            priority
                        />
                    </div>
                </div>
                {/* Navigation Principale */}
                <div className="space-x-4">
                    <Link href="/" className="hover:text-green-600 font-bold">Home</Link>
                    <Link href="/vitiscore" className="hover:text-green-600 font-bold">VitiScore</Link>
                    <Link href="/chatbot" className="hover:text-green-600 font-bold">ChatBot IA</Link>
                    <Link href="/planetscore" className="hover:text-green-600 font-bold">PlanetScore</Link>
                    <Link href="/blog" className="hover:text-green-600 font-bold">Blog</Link>
                </div>
                {/* Sélecteur de langue */}
                <div className="space-x-2 text-sm">
                    <Link href="/" locale="fr" className="text-gray-500 hover:text-black font-medium">FR</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/" locale="en" className="text-gray-500 hover:text-black font-medium">EN</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/" locale="es" className="text-gray-500 hover:text-black font-medium">ES</Link>
                </div>
            </nav>

            {/* Contenu principal */}
            <main className="p-8">
                {children}
            </main>

            {/* Footer global */}
          <Footer />
          
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
import Footer from "@/components/Footer";

