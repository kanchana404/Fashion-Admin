import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fashion Admin",
  description: "Fashion Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // awdaw
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
    </ClerkProvider>
    
  );
}
