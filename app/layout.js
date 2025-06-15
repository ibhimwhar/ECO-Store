import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContextContainer from "@/component/Context";
import Wrapper from "@/component/Wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ECO Store",
  description: "A simple ecommerce store built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ContextContainer>
          <Wrapper>{children}</Wrapper>
        </ContextContainer>
      </body>
    </html>
  );
}