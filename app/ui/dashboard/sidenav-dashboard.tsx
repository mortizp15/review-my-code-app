"use client"

import Link from "next/link"
import SignOut from "./signout"
import { Curso } from "@/app/lib/definitions"
import Image from "next/image"
import logo from "../../../assets/R.png"

export default function SideNavDashBoard({ cursos } : { cursos: Curso[] | undefined}) {

    return (
        <div className="bg-[#19181D] flex flex-col justify-between items-center left-0 max-w-[30rem] border-r-2 border-r-[#333] h-full p-10 ">
            <div className="flex flex-col mt-5  h-[80%] overflow-auto">
                <Link href="/" className="font-bold text-[19px] flex items-center text-white mx-auto mb-14"> <Image width={50} height={50} className="rounded-md shadow-md shadow-[#ffffff09]" src={logo} alt="logo"/> </Link>
                <h1 className="text-white font-bold text-[20px] mb-3">Tus Cursos</h1>
                <hr />
                {
                    cursos?.map(curso => {
                        return (
                           <div className="my-2 transition cursor-pointer text-white p-4 rounded-lg hover:bg-[#58585873] font-semibold flex flex-col">
                                <h3>{curso.nombre_curso}</h3>
                                <p className="text-gray-400 font-normal text-[14px] text-ellipsis">{curso.descripcion_curso}</p>
                           </div>
                        )
                    })
                }
            </div>
            <SignOut />
        </div>
    )

}