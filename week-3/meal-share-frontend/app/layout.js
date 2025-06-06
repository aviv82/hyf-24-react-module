import "./globals.css";

import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
});

export const metadata = {
  title: "Week 3 Meal Share Frontend",
  // description: "Generated by create next app",
};

export const link = {
  rel: "icon",
  href: "/favicon.ico",
  sizes: "any",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dosis.className}>{children}</body>
    </html>
  );
}
