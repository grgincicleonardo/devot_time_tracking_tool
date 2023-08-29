import "./globals.css";
import Header from "../../components/Header";
import { Nunito_Sans } from "next/font/google";
import { auth } from "../../firebase/firebase";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//icons
import "primeicons/primeicons.css";
//core
import "primereact/resources/primereact.min.css";

// Load the Nunito Sans font with 'latin' subset
const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
});

// Metadata for the application
export const metadata = {
  title: "Next.js + Firebase Starter",
  description: "Template to use Next.js with Firebase",
};

// Root layout component for the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      {/*
        The <head /> component will contain the components returned by the nearest parent
        head.js. It can be used to define the document head for SEO, metadata, and other purposes.
        Learn more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={nunito.className}>
        {/* Wrap the children with the AuthContextProvider to provide authentication context */}

        <Header />
        {children}
      </body>
    </html>
  );
}
