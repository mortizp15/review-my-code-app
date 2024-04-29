"use client"

import { useRouter } from "next/navigation"



export default function MenuHome() {

    const router = useRouter()

    const handleClick = (ruta: string) => {
        if(ruta === "codereview") {
            router.push("/dashboard/dashboard-home-estudiante/codereview")
        } else if(ruta === "tareas") {
            router.push("/dashboard/dashboard-home-estudiante")
        }
    }

    return (
        <div className="w-fit mx-auto flex items-center gap-5 justify-center text-white py-2 mt-7">
            <p className="cursor-pointer font-semibold transition hover:text-blue-500" onClick={() => handleClick("tareas")}>Tareas Pendientes</p>
            <p className="cursor-pointer font-semibold transition hover:text-blue-500" onClick={() => handleClick("codereview")}>Code Review</p>
        </div>
    )
}