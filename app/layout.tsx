import type { Metadata } from "next";
import "./globals.css";
import {Navbar, Footer} from "@/components"


export const metadata: Metadata = {
  title: "Vehicle Hub",
  description: "Find the car you dream of.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
