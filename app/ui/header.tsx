"use client";

import Link from "next/link";
import NavLinks from "./home/nav-links";
import BotonAuth from "./boton-auth";
import { HiMenuAlt3 } from "react-icons/hi";
import { Session } from "@supabase/auth-helpers-nextjs";

import { useState } from "react";

export default function Header({ session }: { session: Session }) {
  const [isOpen, setIsOpen] = useState(false);
  const ICON = "</>";

  return (
    <header className="text-sm flex items-center h-20 justify-between w-4/5 lg:w-3/5 border-b border-[#e2e2e233] mx-auto">
      <section className="flex justify-between w-full text-white">
        <div className="flex w-full items-center lg:justify-normal md:justify-between">
          <Link href="/" className="mr-5 font-bold text-[20px] text-white">
            {ICON} REVIEWMYCODE
          </Link> 
          <div
            className={`hidden md:flex lg:flex items-center ${
              isOpen ? "flex" : "hidden"
            } flex-col md:flex-row lg:flex-row`}
          >
            <NavLinks />
          </div>
        </div>        
      </section>
      <button
            className="p-2 text-white md:hidden lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiMenuAlt3 style={{
              color: "white",
              fontWeight: "600",
              fontSize: "1.5rem",
            }} />
      </button>
      <div className="text-white hidden lg:flex items-center">
        
        {session !== null && (
          <Link
            href="/dashboard"
            className="mx-10 cursor-pointer font-medium hover:text-[#77adff]"
          >
            Entrar
          </Link>
        )}
        <BotonAuth session={session} />
      </div>
      <div className={` translate-x-[180px] translate-y-[100px] z-50 lg:hidden fixed rounded-md text-center flex flex-col md:hidden ${isOpen ? "block" : "hidden"} px-10 text-white bg bg-zinc-700 shadow-md w-fit`}>
        <NavLinks />
      </div>
    </header>
  );
}
