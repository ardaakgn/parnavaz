import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PARNAVAZ",
    template: "%s — PARNAVAZ",
  },
  description:
    "Parnavaz — Karga bağımsız kültür dergisi. Yaratıcılığın karanlık köşelerinden doğan sesler.",
  keywords: ["parnavaz", "karga", "dergi", "edebiyat", "sanat", "kültür", "bağımsız"],
  authors: [{ name: "Parnavaz" }],
  creator: "Parnavaz",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://parnavaz.com",
    siteName: "PARNAVAZ",
    title: "PARNAVAZ",
    description:
      "Karga bağımsız kültür dergisi. Yaratıcılığın karanlık köşelerinden doğan sesler.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PARNAVAZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PARNAVAZ",
    description: "Karga bağımsız sikiş çizgi dergisi.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Caveat:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="ambient-bg antialiased">
        {children}
      </body>
    </html>
  );
}
