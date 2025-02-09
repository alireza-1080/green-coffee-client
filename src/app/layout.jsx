import './globals.css';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/modules/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-800 h-[500vh]'>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

const metadata = {
  title: 'Green Coffee',
  icons: {
    icon: '/favicon.ico',
  },
};

export { metadata };
