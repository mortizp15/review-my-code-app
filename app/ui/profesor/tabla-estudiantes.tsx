"use client"

import { EstudianteSearch } from "@/app/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TablaEstudiantes({ desasignarEstudiante, estudiantes, validarAsignacion, asignarEstudiante } : { desasignarEstudiante: (idEstudiante: string) => void, estudiantes: EstudianteSearch[], validarAsignacion: (idEstudiante: string) => Promise<boolean>, asignarEstudiante: (idEstudiante: string) => Promise<boolean>}) {
  
    const [estadosAsignacion, setEstadosAsignacion] = useState<{ [key: string]: boolean }>({});

      useEffect(() => {
        const cargarEstadosAsignacion = async () => {
            const estados: { [key: string]: boolean } = {}
            for (const estudiante of estudiantes) {
              const asignado = await validarAsignacion(estudiante.id);
              estados[estudiante.id] = asignado;
            }
            setEstadosAsignacion(estados);
        };
        cargarEstadosAsignacion();
    }, [estudiantes])

    const handleAsignar = (idEstudiante: string) => {
        const asignado = asignarEstudiante(idEstudiante);
        asignado.then((res) => {
          if(res) {
            setEstadosAsignacion((prev) => ({ ...prev, [idEstudiante]: true }));
          }
        })
    }

    const handleDesasignar = (idEstudiante: string) => {
        desasignarEstudiante(idEstudiante)
        setEstadosAsignacion((prev) => ({ ...prev, [idEstudiante]: false }))
    }

    return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="text-center px-6 py-3">
            #
          </th>
          <th scope="col" className="text-center px-6 py-3">
            Usuario
          </th>
          <th scope="col" className="text-center px-6 py-3">
            Asignar
          </th>
        </tr>
      </thead>
      <tbody>
        {estudiantes?.map((estudiante) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            key={estudiante.id}
          >
            <td className="px-6 py-4 flex items-center justify-center">
              <Image
                className="rounded-full"
                width={30}
                height={30}
                src={estudiante.avatar_url || ""}
                alt="avatar"
              />
            </td>
            <td className="px-6 py-4 text-center">{estudiante.username}</td>
            <td className="px-6 py-4 flex items-center justify-center">
            {
              estadosAsignacion[estudiante.id] ? (
                <div onClick={() => handleDesasignar(estudiante.id)} className="bg-red-400 w-fit px-3 text-white font-medium py-1 rounded-full">
                  Desasignar
                </div>
              ) : (
                <button onClick={() => handleAsignar(estudiante.id)} className="bg-green-400 px-3 text-white font-medium py-1 rounded-full">
                  Asignar
                </button>
              )
            }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
