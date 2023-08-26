import "./globals.css";
import Header from "../../components/Header";
import { Nunito_Sans } from "next/font/google";
import "primeicons/primeicons.css";

const nunito = Nunito_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Time Tracking App",
  description: "Created by Leonardo Grgincic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
