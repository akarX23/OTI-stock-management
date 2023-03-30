/* eslint-disable @next/next/no-head-element */
import '@/styles/output.css';
import Header from '@/components/Header/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="flex flex-col">
        <Header />
        <div className="mt-16" />
        {children}
      </body>
    </html>
  );
}
