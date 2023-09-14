import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marcia Moss",
  description: "Marcia's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Header />
        </nav>
        {children}
      </body>
    </html>
  );
}
