import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaung Mon Khant | Business Analytics, FinTech & Product",
  description:
    "Portfolio of Kaung Mon Khant, focused on Business Analytics, FinTech, Product and AI Automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}