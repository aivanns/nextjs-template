import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/shared/styles/globals.css";
import Providers from "@/shared/utils/providers/providers";
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "aivanns`s next.js template",
  description: "aivanns`s next.js template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
