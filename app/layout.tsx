import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Casas Xio | Luxury Custom Homes in the Rio Grande Valley",
  description: "Crafting exceptional custom homes with purpose, quality, and care. Experience the art of luxury homebuilding in South Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSerifDisplay.variable} ${inter.variable} font-sans antialiased bg-ivory text-midnight`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
