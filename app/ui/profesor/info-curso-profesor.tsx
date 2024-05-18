"use client";

import { Curso, Tarea } from "@/app/lib/definitions";
import Link from "next/link";
import TareasDelCurso from "../curso/tarea";
import { GoPlus } from "react-icons/go";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";

export default function InfoCursoProfesor({ estudiantePerteneciente, id, curso, profesor, tareas } : { estudiantePerteneciente: () => Promise<boolean>, id: string, curso: Curso[], profesor: string, tareas: Tarea[] }) {

  useEffect( () => {
    const pertenece = estudiantePerteneciente()
    pertenece.then(res => {
      if(!res) {
        alert("No perteneces a este curso");
        redirect("/dashboard/dashboard-home-estudiante")
      }
    })
  }, [])
  

  return (
    <div className="text-[#ececec] py-14 w-[40%] h-full flex flex-col mx-auto">
      {curso.map((curso) => (
        <React.Fragment key={curso.id}>
          <div className="w-full flex items-center justify-between">
            <p className="text-[#a0a0a0]">{profesor}</p>
            <Link className="flex items-center transition hover:bg-[#333] py-2 px-4 rounded-full text-blue-300 gap-2 font-semibold" href={`/dashboard/dashboard-home-profesor/crear-tarea?idCurso=${curso.id}`}><GoPlus style={{
                fontSize: "20px",
                fontWeight: "bold"            
              }}/> Crear Tarea</Link>
          </div>
            <h1 key={id} className="font-bold text-[40px] tracking-wider">
              {curso.nombre_curso.toUpperCase()}
            </h1>
          <hr className="mt-2 border-0 bg-blue-400 h-[2px]" />
          <p className="bg-[#333333a9] p-5 rounded-md mt-5">{curso.descripcion_curso}</p>
        </React.Fragment>
      ))}
      {
        tareas.length > 0 && (
            <h1 className="font-semibold text-[20px] mt-14">Tareas</h1>
        )
      }
      
      {
        tareas.map((tarea) => (
          <Link key={tarea.id} href={`/dashboard/dashboard-home-profesor/tareas-profesor?id=${tarea.id}`}><TareasDelCurso nombre={tarea.descripcion_tarea} profesor={profesor} fechaInicio={new Date(tarea.fecha_inicio).toLocaleDateString()} /></Link>
        ))
      }
      
    </div>
  );
}
