"use client";

import { Curso, Tarea } from "@/app/lib/definitions";
import TareasDelCurso from "./tarea";
import TareasPendientes from "../dashboard/TareasPendientes";
import { TypeTareasPendientes } from "@/app/dashboard/dashboard-home-estudiante/curso/page";
import Link from "next/link";

export default function InfoCurso({ id, tareas_pendientes, curso, profesor, tareas }: { id: string, tareas_pendientes: TypeTareasPendientes[], curso: Curso[], profesor: string, tareas: Tarea[] }) {

  return (
    <div className="text-[#ececec] py-14 w-[40%] h-full flex flex-col mx-auto">
      {curso.map((curso) => (
        <>
          <p className="text-[#a0a0a0]">{profesor}</p>
          <h1 key={id} className="font-bold text-[40px] tracking-wider">
            {curso.nombre_curso.toUpperCase()}
          </h1>
          <hr className="mt-2 border-0 bg-blue-400 h-[2px]" />
          <p className="bg-[#333333a9] p-5 rounded-md mt-5">{curso.descripcion_curso}</p>
        </>
      ))}
      {
        tareas.length > 0 && (
            <h1 className="font-semibold text-[20px] mt-14">Tareas</h1>
        )
      }
      
      {
        tareas.map((tarea) => (
          <Link key={tarea.id} href={`/dashboard/dashboard-home-estudiante/tareas-estudiante?id=${tarea.id}`} ><TareasDelCurso nombre={tarea.descripcion_tarea} profesor={profesor} fechaInicio={new Date(tarea.fecha_inicio).toLocaleDateString()} /></Link>
        ))
      }
      <TareasPendientes tareasPendientes={tareas_pendientes as unknown as TypeTareasPendientes[]}/>
      
    </div>
  );
}
