import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Ticz",
  description: "A Conference Ticket Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`py-3 px-2 md:py-6 md:px-20 lg:px-[120px]`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
