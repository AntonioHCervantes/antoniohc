import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const ParallaxProvider = dynamic(
  () =>
    import("react-scroll-parallax").then((m) => m.ParallaxProvider),
  { ssr: false }
);

const AnimatedBackground = dynamic(
  () => import("../components/AnimatedBackground"),
  { ssr: false }
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Página Personal",
  description: "Sitio personal construido con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ParallaxProvider>
          <AnimatedBackground />
          {children}
        </ParallaxProvider>
      </body>
    </html>
  );
}
