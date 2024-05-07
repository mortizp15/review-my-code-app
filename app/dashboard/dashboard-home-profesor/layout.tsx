import SidenavDashboardProfesor from "@/app/ui/dashboard/sidenav-dashboard-profesor";

export default function PageProfesor({ children } : {
    children: React.ReactNode
}) {
    return (
    <section className="w-full h-full flex bg-[#111111]">
        <SidenavDashboardProfesor />
        {children}
    </section>
    )
}