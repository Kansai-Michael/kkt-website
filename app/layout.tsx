import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";
import GAPageView from "@/components/GAPageView";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
  },
  verification: {
    google: "3PUpFhwHprjOpUSEid5xt66HZ-02Zrj9jU0mO8uWmgY",
  },
  title: "Kansai Karate Tarragindi | Traditional Karate for Kids, Teens & Adults",
  description:
    "Traditional Shitoryu Shukokai karate for families in Tarragindi. Little Lions, Juniors, Teens and Adults classes at Wellers Hill Bowls Club. Book a free trial today.",
  keywords:
    "karate tarragindi, kids karate tarragindi, martial arts tarragindi, karate classes brisbane southside, wellers hill bowls club karate",
  openGraph: {
    title: "Kansai Karate Tarragindi | Traditional Karate for Families",
    description:
      "Traditional Shitoryu Shukokai karate for families in Tarragindi. Free trial available.",
    url: "https://kansaikaratetarragindi.com.au",
    siteName: "Kansai Karate Tarragindi",
    images: [
      {
        url: "https://kansaikaratetarragindi.com.au/images/og-social.jpg",
        width: 1200,
        height: 630,
        alt: "Kansai Karate Tarragindi",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kansai Karate Tarragindi",
    description: "Traditional karate for families in Tarragindi. Free trial available.",
    images: ["https://kansaikaratetarragindi.com.au/images/og-social.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Kansai Karate Tarragindi",
  description:
    "Traditional Japanese karate for kids, teens and adults in Tarragindi, Brisbane QLD. Programs for all ages: Little Lions (5–7), Juniors (8–12), Teens (13–17) and Adults.",
  url: "https://kansaikaratetarragindi.com.au",
  telephone: "+61480566172",
  email: "jason@kansaikaratetarragindi.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wellers Hill Bowls Club, 34 Esher St",
    addressLocality: "Tarragindi",
    addressRegion: "QLD",
    postalCode: "4121",
    addressCountry: "AU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday"],
      opens: "16:15",
      closes: "20:00",
    },
  ],
  priceRange: "$$",
  image: "https://kansaikaratetarragindi.com.au/images/og-social.jpg",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kansai Karate Tarragindi",
  url: "https://kansaikaratetarragindi.com.au",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kansai Karate Tarragindi",
  url: "https://kansaikaratetarragindi.com.au",
  logo: "https://kansaikaratetarragindi.com.au/images/logo.png",
  telephone: "+61480566172",
  email: "jason@kansaikaratetarragindi.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wellers Hill Bowls Club, 34 Esher St",
    addressLocality: "Tarragindi",
    addressRegion: "QLD",
    postalCode: "4121",
    addressCountry: "AU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${oswald.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ClientLayout>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientLayout>
        {/* Google Analytics 4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-V0EWLSYB7P" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V0EWLSYB7P', { send_page_view: false });
        `}</Script>
        <GAPageView />
      </body>
    </html>
  );
}
