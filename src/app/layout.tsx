import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import Header from "./Header";
/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/
export const metadata: Metadata = {
  title: "YK DEVOUT EXPORTS",
  description: "We export Fox Nuts/ Makhana",
}; 






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className="bg-custom-bg text-custom-text m-4"
      > 
      <Header/> 
      <hr/> 
        {children} 
        <hr/> 
        <Footer/>
      </body>
    </html>
  );
}