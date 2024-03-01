import type { Metadata } from "next";
import "./globals.css";
import { Balsamiq_Sans } from "next/font/google";

const inter = Balsamiq_Sans({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Meteor",
  description: "Meets/Video Calls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
