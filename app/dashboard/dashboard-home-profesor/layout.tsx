import SidenavDashboardProfesor from "@/app/ui/dashboard/sidenav-dashboard-profesor";
import { Analytics } from "@vercel/analytics/react";

export default function PageProfesor({ children } : {
    children: React.ReactNode
}) {
    return (
    <html lang="es">
        <title>Dashboard Profesor</title>
        <section className="absolute w-full h-full flex bg-[#0a0a0a]">
            <SidenavDashboardProfesor />
            {children}
            <Analytics />
        </section>
    </html>
    )
}