import './globals.css';
import { AuthProvider } from "@/context/AuthContext";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'QurbaniHat | Livestock Booking Platform',
  description: 'Modern Qurbani livestock marketplace for cows and goats.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="qurbani">
      <body>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="top-center" />
        </AuthProvider>
      </body>
    </html>
  );
}
