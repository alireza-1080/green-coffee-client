import './globals.css';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-500">
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
