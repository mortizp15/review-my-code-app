"use client"

import { Session } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"



export default function BienvenidaHome({ session }: { session: Session }) {

    const router = useRouter()

    const handleClick = (ruta: string) => {
        if(ruta === "codereview") {
            router.push("/dashboard/dashboard-home-estudiante/codereview")
        } else if(ruta === "tareas") {
            router.push("/dashboard/dashboard-home-estudiante")
        }
    }

    return (
        <div className="w-fit mx-auto h-full flex flex-col items-center gap-5 text-center justify-center text-white py-2 mt-7">
            <h1 className="font-bold mt-14 text-[35px] ">¡Bienvenido a tu dashboard {session.user.user_metadata.user_name}!</h1>
            <p className="text-[#a3a3a3]">Aquí es donde se encuentra todo lo que puedes hacer como estudiante.</p>
            <h2 className="text-lg font-semibold w-[70%]">
                A la izquierda, tienes un menú con las tres opciones principales y los cursos a los que estas apuntado.
                Recuerda que puedes acceder a ellos en cualquier momento, ademas, si ves la sección de cursos vacía consulta a tu profesor
                para que te asigne uno.
            </h2>
            <p>
                Si te has equivocado de rol o necesitas cambiar alguna configuración, puedes contactarnos aquí: 
            </p>
            <a className="py-2 px-6 transition hover:bg-blue-600 bg-blue-500 rounded-md" href="mailto:maortizpelegrin@gmail.com">Contacto</a>
        </div>
    )
}