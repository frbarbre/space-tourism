import { Navbar } from "./components";
import "./globals.css";
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow-condensed",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "Space Tourism",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
