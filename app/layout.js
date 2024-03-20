import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/authContext";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono'
});

export const metadata = {
  title: "Finance Dashboard",
  description: "A finance dashboard built with Next.js, featuring dynamic graphs, user authentication, and pagination.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main className={`min-h-screen bg-slate-50 ${robotoMono.variable} font-roboto-mono`}>
            <div className='max-w-screen-xl mx-auto min-h-screen flex flex-col'>
              <Header />
              {children}
            </div>
          </main>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
