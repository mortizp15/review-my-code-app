import { getCursosDeEstudiante } from "@/app/lib/actions";
import { Curso } from "@/app/lib/definitions";
import SideNavDashBoard from "@/app/ui/dashboard/sidenav-dashboard";

export default async function DashboardEstudianteLayout({ children } : {
    children: React.ReactNode
}) {
    
    const estudiante_curso = await getCursosDeEstudiante();

    return (
        <section className="w-full h-full flex bg-[#111111]">
            <SideNavDashBoard cursos={ estudiante_curso?.map(item => item.curso) as unknown as Curso[] || [] }/>
            {children}
        </section>
    )
}