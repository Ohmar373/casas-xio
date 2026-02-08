import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "Casas Xio",
  description: "Specialized in providing comprehensive housing solutions, Casas XIO offers a wide range of services including property management, real estate sales, and rental assistance. Our mission is to help you find the perfect home while ensuring a seamless and stress-free experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.variable} font-sans antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
