import './globals.css';
import { Toaster } from 'react-hot-toast';
import AosInit from '@/components/modules/AosInit';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-500">
        {children}
        <Toaster />
        <AosInit />
      </body>
    </html>
  );
}

const metadata = {
  title: 'Green Coffee',
  description: 'Green Coffee, the best coffee in the world',
  author: 'Alireza Aberoumand :)',
  icons: {
    icon: '/favicon.ico',
  },
};

export { metadata };
