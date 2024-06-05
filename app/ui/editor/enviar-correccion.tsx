import { Repo } from "@/app/lib/types";
import { useState } from "react";

export default function EnviarCorreccion({
  enviarComentario,
  fileTree,
  nombreRepo,
}: {
  enviarComentario: (formData: FormData) => void;
  fileTree: Repo[];
  nombreRepo: string;
}) {
  const [enviado, setEnviado] = useState(false);

  // Enviar comentario
  const handleSubmit = (formData: FormData) => {
    enviarComentario(formData);
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
    }, 4000);
  };

  // Extraer nombres de archivos y sha
  let nombresArchivo: string[] = [];
  let sha = "";

  fileTree.map((file) => {
    file?.children?.map((child) => {  
      if(child.type === "blob" && !child.path.includes(".jpg")) {
        nombresArchivo.push(child.path)
      } else if(child.type === "tree") {
        child?.children?.map((child) => {
          nombresArchivo.push(child.path)
        })
      }
    })
    sha = file.sha;
  });


  return (
    <form className="flex flex-col w-[70%]" action={handleSubmit}>
      <label
        className="text-white font-semibold text-[15px] text-center mt-10 mb-5"
        htmlFor="archivo"
      >
        Selecciona un archivo
      </label>
      <select
        name="archivo"
        className="bg-transparent border-[2px] border-[#494949] p-2 text-white rounded-md"
      >
        {nombresArchivo.map((nombreArchivo) => (
          <option className="text-black" key={sha} value={nombreArchivo}>
            {nombreArchivo}
          </option>
        ))}
      </select>
      <label
        className="text-white font-semibold text-[15px] text-center mt-10 mb-5"
        htmlFor="comentario"
      >
        Línea a comentar
      </label>
      <input
        type="number"
        className="bg-transparent border-[2px] border-[#494949] p-2 text-white rounded-md"
        name="linea"
        placeholder="Línea"
      />
      <label
        className="text-white font-semibold text-[15px] text-center mt-10 mb-5"
        htmlFor="comentario"
      >
        Comentario
      </label>
      <textarea
        className="bg-transparent border-[2px] border-[#494949] h-36 p-2 text-white rounded-md"
        name="comentario"
        placeholder="¿Qué quieres decirle a tu alumno?"
      ></textarea>
      <input type="hidden" name="nombre_repo" value={nombreRepo} />
      {enviado ? (
        <button className="py-2 w-full text-white font-semibold rounded-full bg-blue-500 mt-10">
          ¡Enviado!
        </button>
      ) : (
        <button
          type="submit"
          className="py-2 w-full text-white font-semibold rounded-full bg-green-500 mt-10"
        >
          Enviar
        </button>
      )}
    </form>
  );
}
