import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
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
