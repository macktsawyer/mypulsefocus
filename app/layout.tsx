import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from '@/components/theme-provider';
import "./globals.css";

import { cn } from '@/lib/utils'

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "MyPulseFocus",
  description: "A healthcare management application",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('min-h-screen bg-dark-300 font-sans antialiasin', fontSans.variable)}
      >
        <ThemeProvider
              attribute="class"
              defaultTheme="dark"
            >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
