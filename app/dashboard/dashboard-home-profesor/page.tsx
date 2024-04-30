import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function DashboardHomeProfesor() {

    const supabase = createServerComponentClient({ cookies });
    const {
      data: { session },
    } = await supabase.auth.getSession();
  
    if (session === null) {
      redirect("/");
    }
  
    let { data: rol } = await supabase
      .from("usuario")
      .select("rol")
      .eq("username", session.user.user_metadata.user_name);
  
    let rolObjetivo: string = "";
  
    rol?.map((rolBuscado) => {
      const { rol: rolResultado } = rolBuscado;
  
      rolObjetivo = rolResultado;
    });
  
    if (rolObjetivo !== "profesor") {
      redirect("/dashboard");
    }

    return (
      <section className="flex flex-col w-[90%]">    
        
      </section>
    )
}