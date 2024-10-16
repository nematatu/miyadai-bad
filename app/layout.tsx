import './styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@radix-ui/themes/styles.css';
import {Theme} from "@radix-ui/themes"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://miyadai-bad.vercel.app/'),
	openGraph: {
		title: '宮崎大学 バドミントン部',
		description: '宮崎大学バドミントン部の公式ホームページです。',
  },
  title: '宮崎大学 バドミントン部',
  icons:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🏸</text></svg>",
  description: '宮崎大学バドミントン部の公式ホームページです。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className}`}>
        <Header />
        <Theme>
        <main className="bg-gray-100 min-h-screen">{children}</main>
        </Theme>
        <Footer />
      </body>
    </html>
  );
}