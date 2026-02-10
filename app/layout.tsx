
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto_Slab } from "next/font/google";
import { Poppins } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700"], // add what you need
  variable: "--font-poppins",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["700"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoSlab} ${poppins.variable} antialiased`}
      >
        <Navbar/>
        <main className="pt-20 pb-20 bg-[#FFFBEB]">
        {children}
        </main>
      <Footer/>
      
      </body>
    </html>
  );
}
