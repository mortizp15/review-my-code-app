import Link from "next/link"
import { opcionesEsrtudiante } from "./opcionesEstudiante"
import SignOut from "./signout"
import Image from "next/image"
import logo  from "../../../assets/R.png"

export default function SideNavDashBoard() {

    return (
        <div className=" flex flex-col justify-between items-center left-0 max-w-[30rem] border-r-2 border-r-[#333] h-full p-10 ">
            <div className="flex flex-col mt-5">
                <Link href="/" className="font-bold text-[20px] mx-auto mb-14"> <Image className="rounded-full" width={45} height={45} src={logo} alt="Logo"/> </Link>
                {
                    opcionesEsrtudiante.map(opcion => {
                        const OPTION_ICON = opcion.icono
                        return (
                            <Link className="my-2 transition text-[#c0c0c0] p-2 rounded-md hover:bg-[#333] hover:text-white font-semibold flex items-center" href={opcion.href}><OPTION_ICON className="mr-3 text-xl"/>{opcion.nombre}</Link>
                        )
                    })
                }
            </div>
            <SignOut />
        </div>
    )

}