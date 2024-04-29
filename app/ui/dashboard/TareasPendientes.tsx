import { TypeTareasPendientes } from "@/app/dashboard/dashboard-home-estudiante/curso/page";
import Link from "next/link";
import { IoAlertCircleOutline } from "react-icons/io5";

export default function TareasPendientes({ tareasPendientes } : { tareasPendientes: TypeTareasPendientes[] | undefined}) {

    return (
        <div className="flex flex-col py-14 w-full h-[20em]">
        <h1 className="flex items-center font-semibold text-[20px]"><IoAlertCircleOutline style={{ marginRight: "10px", fontSize: "25px", color: "rgb(37 99 235)" }} />¡Tienes tareas pendientes!</h1>
                {
                    tareasPendientes?.map(tarea => (
                        <Link href={`/dashboard/dashboard-home-estudiante/tareas-estudiante?id=${tarea.id}`} key={tarea.id} className="my-5 transition cursor-pointer w-full h-26 border-[1px] border-white text-white p-4 rounded-lg font-semibold flex flex-col">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3>{tarea.descripcion_tarea}</h3>
                                    <p className="text-gray-400 font-normal text-[14px] overflow-ellipsis overflow-hidden">Fecha de finalización: {tarea.fecha_finalizacion ? new Date(tarea.fecha_finalizacion).toLocaleDateString() : ''}</p>
                                    <p className="text-gray-400 font-normal text-[14px] overflow-ellipsis overflow-hidden">Curso: {tarea.nombre_curso}</p>
                                </div>
                                <button
                                    className="iniciarSesion font-medium px-4 py-2 rounded-full transition bg-[linear-gradient(#6C3BF5,#3F8CFF)]"
                                >
                                    Entregar
                                </button>
                            </div>
                        </Link>
                    ))
                }
        </div>
    )

}