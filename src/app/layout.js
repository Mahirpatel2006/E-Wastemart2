import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import CartContextWrapper from "@/components/CartContextWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <CartContextWrapper>
            {children}
          </CartContextWrapper>
        </SessionWrapper>
      </body>
    </html>
  );
}
