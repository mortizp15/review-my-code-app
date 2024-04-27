import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import SideNavDashBoard from "@/app/ui/dashboard/sidenav-dashboard";
import TareasPendientes from "@/app/ui/dashboard/tareaspendientes";

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

  return (
    <>
      <section className="w-full h-full flex bg-[#202028]">
        <SideNavDashBoard />
        <div className="w-[87%]">
          <TareasPendientes />
        </div>
      </section>
      
    </>
  );
}
