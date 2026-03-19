import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "OptiBoard — Administration externalisée pour artisans du bâtiment",
    template: "%s | OptiBoard",
  },
  description: "Vous posez, on gère. OptiBoard prend en charge 100% de votre paperasse : devis en 2 minutes par vocal, facturation automatique, relances impayés, export comptable FEC. Essai gratuit 14 jours.",
  metadataBase: new URL("https://optipro.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "OptiBoard",
    title: "OptiBoard — Administration externalisée pour artisans du bâtiment",
    description: "Vous posez, on gère. Devis, factures, relances, trésorerie : 100% délégués. Essai gratuit 14 jours.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OptiBoard — Votre secrétaire spécialisée bâtiment",
    description: "Service d'administration externalisée pour artisans du BTP. Devis par vocal, facturation auto, relances impayés.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={outfit.className}>
        <Header />
        <main style={{ paddingTop: 'var(--header-height)', minHeight: 'calc(100vh - 300px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
