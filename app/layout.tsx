import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

import type { Metadata } from 'next';

import { cn } from '@/lib/utils';

import { Toaster } from '@/components/ui/toaster';

import './globals.css';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZOOM',
  description: 'Video calling app',
  icons: '/icons/logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          layout: {
            logoImageUrl: '/icons/logo.svg',
            socialButtonsVariant: 'iconButton',
          },
          variables: {
            colorText: '#fff',
            colorPrimary: '#0e78f9',
            colorBackground: '#1c1f2e',
            colorInputBackground: '#252a41',
            colorInputText: '#fff',
          },
        }}
      >
        <body className={cn('bg-dark-2', inter.className)}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
