import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google'
import { Header } from "@/components/Header";

import { GeistSans } from "geist/font/sans";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dheeraj-dun.vercel.app/'),
  title: 'GHA Media | Your Vision Our Edit ',
  keywords: ['2d Animation Editing', 'Youtube video Shorts Editing', 'Video Editing in Canada'],
  description: 'Your Vision Our Edit Seamless ExperienceOn-Demand Video Editing Support for Small Businesses and Content Creator',
  openGraph: {
    title: 'GHA Media | Your Vision Our Edit ',
    siteName: 'GHA Media | Your Vision Our Edit ',
    url:"https://dheeraj-dun.vercel.app/",
    description: 'Your Vision Our Edit Seamless ExperienceOn-Demand Video Editing Support for Small Businesses and Content Creator',
    images: '/opengraph-image.png?2f1c2513b6da9af5'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GHA Media | Your Vision Our Edit ',
    description: 'Your Vision Our Edit Seamless ExperienceOn-Demand Video Editing Support for Small Businesses and Content Creator',
    images: '/opengraph-image.png?2f1c2513b6da9af5'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="bg-black antialiased ">
            <Header />
            {children}
            <Footer/>
            </main>
            
          </ThemeProvider>
      </body>
    </html>
  );
}
