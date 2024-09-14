import type { Metadata } from "next";
import { Handjet, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetBrainsMono',
});

const handjet = Handjet({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-handjet',
});

export const metadata: Metadata = {
  title: "Đếm ngày yêu",
  description: "Đếm ngày yêu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrains_Mono.variable} ${handjet.variable}`}>
        {children}
      </body>
    </html>
  );
}
