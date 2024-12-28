import type { Metadata } from 'next';

import ApiLimit from '@/components/api-limit/api-limit';
import Navigation from '@/components/navigation/navigation';

import './globals.css';

import localFont from 'next/font/local';
import { ReactNode } from 'react';

import styles from './layout.module.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Cinema App',
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.wrapper}>
          <Navigation />
          {children}
          <footer>
            <ApiLimit />
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
