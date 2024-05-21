import { getCursosDeEstudiante } from "@/app/lib/actions";
import { Curso } from "@/app/lib/definitions";
import SideNavDashBoard from "@/app/ui/dashboard/sidenav-dashboard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardEstudianteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  let { data: rol } = await supabase
    .from("usuario")
    .select("rol")
    .eq("username", session?.user.user_metadata.user_name);

  let rolObjetivo: string = "";

  rol?.map((rolBuscado) => {
    const { rol: rolResultado } = rolBuscado;

    rolObjetivo = rolResultado;
  });

  if (rolObjetivo !== "estudiante") {
    redirect("/dashboard");
  }

  const estudiante_curso = await getCursosDeEstudiante();

  return (
    <html lang="es">
      <title>Dashboard Estudiante</title>
      <section className="absolute w-full h-full flex bg-[#0a0a0a]">
        <SideNavDashBoard
          cursos={
            (estudiante_curso?.map(
              (item) => item.curso
            ) as unknown as Curso[]) || []
          }
        />
        {children}
        <Analytics />
      </section>
    </html>
  );
}
