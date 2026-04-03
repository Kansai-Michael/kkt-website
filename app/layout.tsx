import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

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
  title: "Kansai Karate Tarragindi | Traditional Karate for Kids, Teens & Adults",
  description: "Traditional Shitoryu Shukokai karate for families in Tarragindi. Little Lions, Juniors, Teens and Adults classes. Book a free trial today.",
  keywords: "karate tarragindi, kids karate tarragindi, martial arts tarragindi, karate classes brisbane southside",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Kansai Karate Tarragindi",
  "description": "Traditional Japanese karate for kids, teens and adults in Tarragindi, Brisbane QLD. Programs for all ages: Little Lions (5-7), Juniors (8-12), Teens (13-17) and Adults.",
  "url": "https://kansaikaratetarragindi.com.au",
  "telephone": "+61738485949",
  "email": "jason@kansaikaratetarragindi.com.au",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "195 Fingal Street",
    "addressLocality": "Tarragindi",
    "addressRegion": "QLD",
    "postalCode": "4121",
    "addressCountry": "AU"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Thursday"], "opens": "16:15", "closes": "20:00" }
  ],
  "priceRange": "$$",
  "image": "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02/KKA-Logo-Trans-background.png"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Kansai Karate Tarragindi",
  "url": "https://kansaikaratetarragindi.com.au",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://kansaikaratetarragindi.com.au/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ClientLayout>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
