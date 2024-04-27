import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import SideNavDashBoard from "@/app/ui/dashboard/sidenav-dashboard";
import { Curso } from "@/app/lib/definitions";

export default async function DashboardHomeEstudiante() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/");
  }

  console.log(session.user.user_metadata)

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

  let { data: idEstudiante } = await supabase
    .from("usuario")
    .select("id")
    .eq("username", session.user.user_metadata.user_name)

  idEstudiante?.map((idEstudianteBuscado) => {
    const { id: idEstudianteResultado } = idEstudianteBuscado;

    idEstudiante = idEstudianteResultado;
  })

  let { data: estudiante_curso } = await supabase
  .from('estudiante_curso')
  .select('id_curso, curso(*)')
  .eq("id_estudiante", idEstudiante)


  // La lista que se recorre en el componente SideNavDashBoard es de cursos, se castea a Curso[] para "borrar" el tipo original
  return (
    <>
      <section className="w-full h-full flex bg-[#000000]">
        <SideNavDashBoard cursos={ estudiante_curso?.map(item => item.curso) as unknown as Curso[] || [] }/> 
      </section>
      
    </>
  );
}
