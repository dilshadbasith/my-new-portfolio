import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Dilshad Basith | Front-End Creative Developer",
  description: "Front-End Creative & Interactive Developer specializing in React.js, Next.js, and modern web technologies. Building immersive, high-performance digital experiences.",
  keywords: ["Dilshad Basith", "Front-End Developer", "React Developer", "Next.js", "Web Developer", "Creative Developer", "Portfolio", "Kerala", "India"],
  authors: [{ name: "Dilshad Basith" }],
  creator: "Dilshad Basith",
  verification: {
    google: "mROJK9Ao95O9jC22hRubAijhYolKhaN5M7Z4NPHKHUE",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dilshadbasith.vercel.app/", // You should update this with the actual URL if known, or generic
    title: "Dilshad Basith | Front-End Creative Developer",
    description: "Building immersive, high-performance digital experiences with React.js and Next.js.",
    siteName: "Dilshad Basith Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilshad Basith | Front-End Creative Developer",
    description: "Front-End Creative & Interactive Developer building immersive web experiences.",
    creator: "@dilshadbasith", // Placeholder, update if user provides handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dilshad Basith",
              url: "https://your-domain.com",
              sameAs: [
                "https://www.linkedin.com/in/your-username",
                "https://github.com/your-username"
              ],
              jobTitle: "Front-End Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              }
            }),
          }}
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary/40 overflow-x-hidden`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
