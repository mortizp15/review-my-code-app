"use client"

import { EnvioDeTarea, Tarea } from "@/app/lib/definitions";
import { getRepos } from "@/app/lib/services";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";



export default function EnviarTarea({
  session,
  tarea,
  addTarea,
  idTarea,
  idEstudiante,
}: {
  session: Session;
  tarea: Tarea[];
  addTarea: (formData: FormData) => void;  
  idTarea: string;
  idEstudiante: string;
}) {

    const [enviado, setEnviado] = useState(false);
    const [fechaLimite, setFechaLimite] = useState("");
    const [repos, setRepos] = useState([]);
    const [nombre_repo, setNombreRepo] = useState("");

    // Obtener repositorios del usuario
    useEffect(() => {
      getRepos(session.user?.user_metadata.user_name)
        .then((data) => {
          setRepos(data);
        })
        .catch((error) => {
          console.error("Error al obtener los repositorios", error);
        });

    }, [session.user?.user_metadata.user_name])
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("idTarea", idTarea);
        formData.append("idEstudiante", idEstudiante);
        formData.append("nombre_repo", nombre_repo);

        tarea?.map(item => {

          const fechaFinalizacion = new Date(item.fecha_finalizacion).getTime();
          const fechaActual = new Date().getTime();

          if(fechaActual > fechaFinalizacion){
            setFechaLimite("¡La fecha límite de entrega ha expirado!");
          } else {
            addTarea(formData);
          }
        })   
  
        setEnviado(true);
    };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNombreRepo(event.target.value);
    }


    
  return (
    <div className="w-[70%] mx-auto h-[30%] mt-20">
    { !enviado && fechaLimite === "" ? (
        <>
            <h1 className="text-white text-center mb-5 font-semibold text-[25px]">
            ¡Envia tu tarea!
            </h1>

            <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto flex flex-col items-center"
            >
              <select onChange={handleChange} id="nombre_repo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Escoge un repositorio</option>
                {
                  repos.map((repo: { id: string; name: string }) => (
                    <option id="nombre_repo" key={repo.id} value={repo.name}>{repo.name}</option>
                  ))
                }
              </select>
              <button
              className="text-white bg-blue-500 transition py-2 px-6 rounded-md hover:bg-blue-600 mt-7"
              type="submit"
              >
              Enviar
              </button>
            </form>
        </>
    ) : fechaLimite !== "" ? (
        <h1 className="text-red-600 text-center mb-5 font-semibold text-[25px]">
            {fechaLimite}
        </h1>
    ) : (
        <h1 className="text-white text-center mb-5 font-semibold text-[25px]">
          ¡Tarea Enviada!
        </h1>
    )}
     
    </div>
  );
}
