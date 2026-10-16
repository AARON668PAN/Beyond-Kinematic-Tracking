import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Beyond Kinematic Tracking | Expressive Humanoid Whole-Body Control',
  description:
    'Residual compensation that preserves amplitude, energy, body expansion, body lean, and pelvis height on top of frozen humanoid whole-body trackers, demonstrated on the Unitree G1.',
  authors: [
    { name: 'Lingfan Bao' },
    { name: 'Hanshang Zhu' },
    { name: 'Yan Pan' },
    { name: 'Jincheng Wang' },
    { name: 'Jingyang Yu' },
    { name: 'Tianhu Peng' },
    { name: 'Yiyang Jia' },
    { name: 'Dimitrios Kanoulas' },
    { name: 'Chengxu Zhou' },
  ],
};

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
