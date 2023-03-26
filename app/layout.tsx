/* eslint-disable @next/next/no-head-element */
import '@/styles/globals.css';
import Header from '@/components/Header/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
