"use client";

import '@/styles/globals.scss';
import { Inter, Nunito_Sans } from 'next/font/google';
import NavbarCreatePost from "@/components/Navbar/NavbarCreatePost";
import Navbar from "@/components/Navbar/Navbar";
import { usePathname } from 'next/navigation';

const nunito = Nunito_Sans({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  const renderNavbar = () => {
    if (pathname === "/dashboard") {
      return null
    }
    if (pathname === "/dashboard/create-post" || pathname === "/dashboard/edit-post") {
      return <NavbarCreatePost />
    }
    return <Navbar />
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          {renderNavbar()}
          <main className="w-full mx-auto flex-1 h-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
