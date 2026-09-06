import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://belong-vr.vercel.app"),
  title: "Belong | Accessible Mobile VR & AI for Autism Inclusion",
  description:
    "An accessible Mobile VR assistive system empowering autistic adolescents to practice unscripted, culturally authentic social interactions in everyday Egyptian environments.",
  keywords: [
    "Autism Inclusion",
    "Mobile VR",
    "Egyptian Arabic AI",
    "Assistive Technology",
    "Belong",
    "Social Skills Training",
    "Special Education"
  ],
  openGraph: {
    title: "Belong | Accessible Mobile VR & AI for Autism Inclusion",
    description:
      "Bridging the economic and cultural divide in autism therapy through accessible Mobile VR and dynamic Egyptian Arabic conversational practice.",
    images: [
      {
        url: "/scenes/fava-beans-cart.jpg",
        width: 1200,
        height: 630,
        alt: "Belong Mobile VR Experience",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
