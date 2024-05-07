import Link from "next/link"
import { opciones } from "./opciones"




export default function SideNav() {

    return (
        <div className="fixed left-0 max-w-[30rem] h-auto p-10 text-white">
            <hr className="mt-3"/>
            <div className="flex flex-col mt-5">
                {
                    opciones.map(opcion => {
                        const OPTION_ICON = opcion.icono
                        return (
                            <Link key={opcion.href} className="my-1 transition p-2 rounded-md hover:bg-[#333] font-semibold flex items-center" href={opcion.href}><OPTION_ICON className="mr-3 text-xl"/>{opcion.nombre}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}