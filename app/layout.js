import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono'
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={`min-h-screen bg-slate-50 ${robotoMono.variable} font-roboto-mono`}>
          <div className='max-w-screen-sm mx-auto'>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
