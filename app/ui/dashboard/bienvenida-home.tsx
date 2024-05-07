"use client"

import { Session } from "@supabase/supabase-js"
import Link from "next/link"



export default function BienvenidaHome({ session }: { session: Session }) {

    return (
        <div className="w-fit mx-auto h-full flex flex-col items-center gap-5 text-center justify-center text-white py-2 mt-7">
            <h1 className="font-bold mt-14 text-[35px] ">¡Bienvenido a tu dashboard {session.user.user_metadata.user_name}!</h1>
            <p className="text-[#a3a3a3]">Aquí es donde se encuentra el corazón de la aplicación.</p>
            <h2 className="text-lg font-semibold w-[70%]">
                A la izquierda, tienes un menú con las tres opciones principales.
                Recuerda que puedes acceder a los cursos en cualquier momento. Para aprender a usar el dashboard dispones de la documentación, <Link className=" text-blue-500" target="_blank" href="/instrucciones">puedes acceder aquí.</Link>
            </h2>
            <p>
                Si te has equivocado de rol o necesitas cambiar alguna configuración, puedes contactarnos aquí: 
            </p>
            <a className="py-2 px-6 transition hover:bg-blue-600 bg-blue-500 rounded-md" href="mailto:maortizpelegrin@gmail.com">Contacto</a>
        </div>
    )
}