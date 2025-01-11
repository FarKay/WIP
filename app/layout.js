import { Rubik } from "next/font/google";

import "./globals.css";
import Header from "./_components/Header";
import SideBar from "./_components/SideBar";
import Head from "next/head";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "WIP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className={`${rubik.className} antialiased min-h-screen`}>
        <div className="lg:grid lg:grid-cols-[140px_1fr] lg:grid-rows-[auto_1fr] lg:h-screen bg-[#282043] lg:max-w-[1440px] lg:mx-auto">
          <Header />
          <SideBar />
          <main className="p-0 pb-[30px] overflow-y-auto">
            <div className="max-w-[1241px] mx-auto my-0 flex flex-col gap-[30px]">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
