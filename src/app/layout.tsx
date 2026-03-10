import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "OptiPro - Le Tableau de Bord des Artisans du BTP",
    template: "%s | OptiPro",
  },
  description: "Reprenez le contrôle de vos chantiers et de votre rentabilité. L'OptiBoard automatise votre gestion, facturation et relances. Conçu pour les plombiers, électriciens, menuisiers et artisans.",
  metadataBase: new URL("https://optipro.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "OptiPro",
    title: "OptiPro - Le Tableau de Bord des Artisans du BTP",
    description: "Reprenez le contrôle de vos chantiers et de votre rentabilité. Conçu pour les artisans du BTP.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OptiPro - Gestion BTP Intelligente",
    description: "L'OptiBoard automatise votre gestion, facturation et relances.",
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
