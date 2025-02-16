import './globals.css';
import { Toaster } from 'react-hot-toast';
import AosInit from '../components/logical/AosInit.jsx';
import ScrollToTop from '../components/logical/ScrollToTop.jsx';

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className="max-w-full max-h-fit bg-gray-500">
        {children}
        <Toaster />
        <AosInit />
        <ScrollToTop />
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
