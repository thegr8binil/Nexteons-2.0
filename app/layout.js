import { Be_Vietnam_Pro } from "next/font/google";
import NavBar from "@/components/NavBar";
import HeroText from "@/components/HeroText";
import "./globals.css";

const vtpro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Nexteons",
  description: "Nexteons Technology Pvt. Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={vtpro.className}>
        <div className="h-screen flex flex-col">
          <NavBar />
          <div className="flex-1 flex items-center justify-center">
            <HeroText />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
