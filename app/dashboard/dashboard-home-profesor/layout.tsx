import SidenavDashboardProfesor from "@/app/ui/dashboard/sidenav-dashboard-profesor";
import { Analytics } from "@vercel/analytics/react";

export default function PageProfesor({ children } : {
    children: React.ReactNode
}) {
    return (
    <html lang="es">
        <title>Dashboard Profesor</title>
        <section className="w-full h-full flex bg-[#111111]">
            <SidenavDashboardProfesor />
            {children}
            <Analytics />
        </section>
    </html>
    )
}