import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Partap Jain | Full Stack 1 - Experiments Showcase",
  description: "Explore a collection of interactive web experiments showcasing modern technologies including HTML, CSS, JavaScript, React, and Next.js. Created by Harsh Partap Jain as part of Full Stack 1 course.",
  keywords: ["Harsh Partap Jain", "Full Stack Developer", "Web Experiments", "React", "Next.js", "JavaScript", "HTML", "CSS", "Interactive Design", "Frontend Development"],
  authors: [{ name: "Harsh Partap Jain" }],
  creator: "Harsh Partap Jain",
  publisher: "Harsh Partap Jain",
  robots: "index, follow",
  openGraph: {
    title: "Harsh Partap Jain | Full Stack 1 - Experiments Showcase",
    description: "Explore a collection of interactive web experiments showcasing modern technologies including HTML, CSS, JavaScript, React, and Next.js.",
    url: "https://fullstack-ait.vercel.app/",
    siteName: "Harsh Partap Jain - Experiments Showcase",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Harsh Partap Jain - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Partap Jain | Full Stack 1 - Experiments Showcase",
    description: "Explore a collection of interactive web experiments showcasing modern technologies.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
