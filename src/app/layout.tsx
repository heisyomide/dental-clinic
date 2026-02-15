import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
<meta 
  name="viewport" 
  content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" 
/>

export const metadata = {
  title: "Crystal Specialist Dental Clinic | Best Dentist in Osogbo",
  description: "Advanced dental implants, orthodontics, and emergency care at Omoluabi Shopping Plaza, Old Garage, Osogbo.",
  keywords: ["Dentist in Osogbo", "Dental Implants Osun", "Crystal Dental Clinic", "Teeth Whitening Osogbo"],
}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
