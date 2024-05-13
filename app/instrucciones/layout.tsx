import Link from "next/link";
import NavLinks from "../ui/home/nav-links";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import BotonAuth from "../ui/boton-auth";
import { Analytics } from "@vercel/analytics/react";

export default async function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const ICON = "</>";

  return (
    <html lang="es">
      <title>RMC | Documentación</title>
      <div className="h-screen">
        <header className="text-sm absolute flex items-center h-20 justify-between w-full bg-black px-20">
          <section className="flex text-white">
            <div className="text-white flex mx-3 font-sans font-medium tracking-wider">
              <Link href="/" className="mr-5 font-bold text-[20px]">
                {ICON} REVIEWMYCODE
              </Link>
              <NavLinks />
            </div>
          </section>
          <div className="text-white">
            {session !== null ? (
              <div className="flex items-center justify-center">
                <Link
                  href="/dashboard"
                  className="mx-10 cursor-pointer font-medium hover:text-[#77adff]"
                >
                  Entrar
                </Link>
                <BotonAuth session={session} />
              </div>
            ) : (
              <BotonAuth session={session} />
            )}
          </div>
        </header>
        <section className="bg-[#090909] w-full h-full pt-20 flex">
          {children}
          <Analytics />
        </section>
      </div>
    </html>
  );
}
