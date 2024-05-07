import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import BienvenidaHome from "@/app/ui/dashboard/bienvenida-home";

export default async function DashboardHomeEstudiante() {
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

  if (rolObjetivo !== "estudiante") {
    redirect("/dashboard");
  }
 


  // La lista que se recorre en el componente SideNavDashBoard es de cursos, se castea a Curso[] para "borrar" el tipo original
  return (
    <section className="flex flex-col w-[90%]">    
        <BienvenidaHome session={session}/>
    </section>
  );
}
