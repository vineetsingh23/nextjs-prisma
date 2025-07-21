import Navbar from './components/navbar';
import './globals.css';
import { inter,lusitana } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lusitana.className}  antialiased`}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
