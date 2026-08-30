import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://fuanruii-security.sarahperkins85461824.chatgpt.site'),
  title: 'Fuanruii Security — Intelligent Vision',
  description:
    'Intelligent security cameras for homes, businesses and global OEM / ODM projects.',
  openGraph: {
    title: 'Fuanruii Security — Intelligent Vision',
    description: 'See risk sooner. Protect what matters.',
    type: 'website',
    images: [
      {
        url: 'https://fuanruii-security.sarahperkins85461824.chatgpt.site/og.png',
        width: 1672,
        height: 941,
        alt: 'Fuanruii Security — Intelligent Vision. Built on trust.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fuanruii Security — Intelligent Vision',
    description: 'See risk sooner. Protect what matters.',
    images: ['https://fuanruii-security.sarahperkins85461824.chatgpt.site/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
