import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Neudev | Premium Web Development Agency",
  description: "Web Development Agency yang Membantu Bisnis Tumbuh Secara Digital menjangkau lebih banyak klien dengan website profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${montserrat.variable} antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
