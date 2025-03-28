"use client"
import styles from "@/app/ui/home.module.css";
import { lusitana } from "./ui/fonts";
import AcmeLogo from "@/app/ui/acme-logo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-2 md:h-52 md:p-4">
        <AcmeLogo />
      </div>

      <div className="flex pt-4 flex-col md:flex-row">
        <div className="bg-gray-300 h-[200px] md:h-auto md:w-1/2 rounded-xl p-4 flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <p
              className={`${lusitana.className} text-xl leading-none text-gray-800 md:text-3xl md:leading-normal`}
            >
              Welcome to Example. This is example for Next.js.
            </p>
            <div> 
              <Link href="/dashboard" className={`${lusitana.className} ${styles.btn}`}>Dashboard</Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-15 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="=block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
