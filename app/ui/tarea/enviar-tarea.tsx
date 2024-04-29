"use client"

import { useState } from "react";



export default function EnviarTarea({
  addTarea,
  idTarea,
  idEstudiante,
}: {
  addTarea: (formData: FormData) => void;  
  idTarea: string;
  idEstudiante: string;
}) {

    const [enviado, setEnviado] = useState(false);
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addTarea(new FormData(event.currentTarget));
        setEnviado(true);
    };

  return (
    <div className="w-[70%] mx-auto h-[30%] mt-20">
    { !enviado ? (
        <>
            <h1 className="text-white text-center mb-5 font-semibold text-[25px]">
            ¡Envia tu tarea!
            </h1>

            <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto flex flex-col items-center"
            >
            <input type="hidden" name="idTarea" id="idTarea" value={idTarea} />
            <input
            type="hidden"
            name="idEstudiante"
            id="idEstudiante"
            value={idEstudiante}
            />
            <input
            required
            type="file"
            name="archivo"
            id="archivo"
            className="block w-full border cursor-pointer border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-white dark:text-neutral-400
                                file:bg-gray-50 file:border-0
                                file:me-4
                                file:py-3 file:px-4
                                dark:file:bg-white dark:file:text-black dark:file:font-semibold"
            />
            <button
            className="text-white bg-blue-500 transition py-2 px-6 rounded-md hover:bg-blue-600 mt-7"
            type="submit"
            >
            Enviar
            </button>
            </form>
        </>
    ) : (
        <h1 className="text-white text-center mb-5 font-semibold text-[25px]">
            ¡Tarea Enviada!
        </h1>
    )}
     
    </div>
  );
}
