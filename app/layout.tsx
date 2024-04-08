import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from '@/app/ui/SideBar'
import styles from '@/app/main.module.css'
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Iceterisk',
  description: "Iceterisk i a notes taking app that allows you to make notes, edit the thext and save them in a database storage",
  icons: 'favicon.ico',
  openGraph: {
    title: 'Iceterisk',
    url: 'https://app.iceterisk.com',
    description: "Iceterisk i a notes taking app that allows you to make notes, edit the thext and save them in a database storage",
    images: [
      {
        url: 'link.svg'
      }
    ],
  },
  robots: {
    index: true,
    follow: true
  },
  keywords: ['Iceterisk', 'Note', 'Notes', 'Take notes', 'Taking notes', 'Iceterisk note', 'Iceterisk notes'],
  applicationName: 'Iceterisk.com',
  generator: 'Iceterisk.com',
  twitter: {
    card: 'summary_large_image',
    title: 'Iceterisk',
    description: 'Notes taking app',
    creator: '@iceterisk',
    images: ['link.svg'], // Must be an absolute URL
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
  metadataBase: new URL('https://app.iceterisk.com'),
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.pageMain}>
          <nav className={styles.sideNavNav}>
            <SideBar />
          </nav>
          <section className={styles.sectionMain}>
            <div className={styles.topNav}>
              <Link href='https://iceterisk.com/donate' target="_blank" className={styles.topNavButton}>Support Iceterisk</Link>
            </div>  
            <div className={styles.pageContent}>
              {children}
            </div>
          </section>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
