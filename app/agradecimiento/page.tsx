"use client"

import { useEffect } from "react"

export default function Agradecimiento() {

    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/dashboard/dashboard-home-estudiante"
        }, 5000)
    
    }, [])

    return (
        <div className="text-[#ececec] py-14 w-[40%] h-full flex flex-col mx-auto">
            <h1 className="text-center font-bold text-[40px] tracking-wider">
                ¡Tarea Enviada!
            </h1>
            <hr className="mt-3 border-0 bg-blue-400 h-[2px]" />
            <p className="text-[17px] font-semibold text-center p-5 rounded-md mt-5">Tu tarea ha sido enviada, vas a ser redirigido en 5 segundos.</p>
        </div>
    )
}