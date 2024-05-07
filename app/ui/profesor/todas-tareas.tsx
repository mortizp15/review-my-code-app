"use client"

import { Tarea } from "@/app/lib/definitions";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import Link from "next/link";
import { Session } from "next-auth";

export default function TodasTareas({ tareas, eliminarTarea } : { tareas: Tarea[], eliminarTarea: (idTarea: string) => void}) {

    const handleClick = (idTarea: string) => {
        eliminarTarea(idTarea)
    }

    return (
        <div className="text-[#ececec] py-14 w-[40%] h-full flex flex-col mx-auto">
            <h1 className="font-bold text-[40px] tracking-wider">Todas tus Tareas</h1>
            <hr />
            {
                tareas.length === 0 ? <h1 className="text-[#a0a0a0] mt-5">No tienes ninguna tarea creada</h1>
                : tareas.map(tarea => (
                    <div key={tarea.id} className="border-[1px] overflow-auto border-[#5f5f5f81] transition cursor-pointer hover:bg-[#234] p-5 rounded-md mt-5 flex items-center justify-between">
                        <Link href={`/dashboard/dashboard-home-profesor/tareas-profesor?id=${tarea.id}`} className="w-full flex items-center">
                            <div className="rounded-full flex items-center justify-center p-3 bg-blue-600">
                                <MdOutlineWorkOutline style={{
                                    fontSize: "20px",
                                }} />
                            </div>
                            <div className="ml-5">
                                    <h1 className="font-semibold text-[15px]">Titulo de la tarea: {tarea.descripcion_tarea} </h1>
                                    <p className="text-[#a0a0a0]">Fecha de publicación: {tarea.fecha_inicio ? new Date(tarea.fecha_inicio).toLocaleDateString() : ''} </p>
                            </div>
                        </Link>
                        <div onClick={() => handleClick(tarea.id.toString())} className=" bg-red-600 p-2 rounded-full hover:bg-red-500 transition-all">
                            <IoTrashOutline style={{
                                fontSize: "20px",
                                marginLeft: "auto",
                            }} />
                        </div>
                    </div>
                    ))
            }
        </div>
    )
}