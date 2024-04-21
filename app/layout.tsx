import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Next.js Demo with Joist",
  description: "A simple Next.js app with Joist as the ORM",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{props.children}</body>
    </html>
  );
}
