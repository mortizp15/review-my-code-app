import Link from "next/link";
import { ICON } from "../layout";
import NavLinks from "./home/nav-links";
import BotonAuth from "./boton-auth";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";


export default async function Header() {

  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

    return (
        <header className="text-sm flex items-center h-20 justify-between w-3/5 border-b border-[#e2e2e233] mx-auto">
            <section className="flex text-white">
              <div className="text-white mx-3 flex font-sans font-medium tracking-wider">
                <Link href="/" className="mr-5 font-bold text-[20px] ">{ICON} REVIEWMYCODE</Link>
                <NavLinks />
              </div>
            </section>
            <div className="text-white flex items-center">
              {
                session !== null && 
                <Link href='/dashboard' className="mx-10 cursor-pointer font-medium hover:text-[#77adff]">
                  Entrar
                </Link>
              }
                <BotonAuth session={session}/>
            </div>
        </header>
    )
}