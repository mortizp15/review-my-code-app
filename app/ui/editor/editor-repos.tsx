"use client";

import { ICON } from "@/app/layout";
import { getContenidoArchivo, getContenidoRepo } from "@/app/lib/services";
import Editor from "@monaco-editor/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EditorRepos({
  enviarComentario,
  owner,
  nombreRepo,
}: {
  enviarComentario: (formData: FormData) => void;
  owner: string;
  nombreRepo: string;
}) {
  const [enviado, setEnviado] = useState(false);
  const [fileTree, setFileTree] = useState<{ path: string }[]>([]);
  const [code, setCode] = useState(`
    //                               ##                                                                                ###
    //                                                                                                                  ##
    //  ######    ####    ##  ##    ###      ####    ##   ##           ##  ##   ##  ##             ####     ####        ##    ####
    //   ##  ##  ##  ##   ##  ##     ##     ##  ##   ## # ##           #######  ##  ##            ##  ##   ##  ##    #####   ##  ##
    //   ##      ######   ##  ##     ##     ######   #######           ## # ##  ##  ##            ##       ##  ##   ##  ##   ######
    //   ##      ##        ####      ##     ##       #######           ##   ##   #####            ##  ##   ##  ##   ##  ##   ##
    //  ####      #####     ##      ####     #####    ## ##            ##   ##      ##             ####     ####     ######   #####
    //                                                                          #####  
    //                                                                           
    //                                                                           
    //                                                                           
    //                                              ESTE EDITOR ESTÁ EN MODO DE SOLO LECTURA                                                  
  `);


  // Llamar a la API de GitHub para obtener el contenido del repositorio
  useEffect(() => {
    getContenidoRepo(owner, nombreRepo)
      .then((contenido) => {
        setFileTree(contenido.tree);
      })
      .catch((error) => {
        console.error("Error al obtener el contenido del repositorio", error);
      });
  }, [owner, nombreRepo]);

  const handleSubmit = (formData: FormData) => {
    enviarComentario(formData);
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
    }, 4000);
  };

  function b64DecodeUnicode(str: string) {
    // Decodificar primero a bytes escapados y luego decodificar el escape con decodeURIComponent
    return decodeURIComponent(
      Array.prototype.map
        .call(atob(str), function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  }

  // Manejar la selección de un archivo
  const handleFileSelect = (file: any) => {
    getContenidoArchivo(owner, nombreRepo, file.sha)
      .then((contenido) => {
        // Decodificar el contenido del archivo
        const decodedContent = b64DecodeUnicode(contenido.content);
        setCode(decodedContent);
      })
      .catch((error) => {
        console.error("Error al obtener el contenido del archivo", error);
        setCode("");
      });
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-[20%] overflow-y-auto bg-[#131313] text-white p-4">
        <Link
          href="/dashboard/dashboard-home-profesor"
          className="font-bold text-[19px] w-fit border-2 mt-3 border-2-white p-2 rounded-full flex items-center text-white mx-auto mb-14"
        >
          {ICON}
        </Link>
        <ul>
          {fileTree?.map((file) => (
            <li
              key={file.path}
              className="cursor-pointer rounded-md transition-all hover:bg-blue-600 p-2"
              onClick={() => handleFileSelect(file)}
            >
              {file.path}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <Editor
          height="100%"
          width="80%"
          theme="vs-dark"
          language="html"
          value={code}
          options={{
            readOnly: true,
            minimap: { enabled: false },
            lineNumbers: "on",
            cursorStyle: "line",
          }}
        />
      </div>
      <div className="fixed right-0 max-w-[16.6%] w-[16.6%] top-0 flex flex-col items-center bg-[#131313] h-full">
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
            {fileTree.map((file) => (
              <option className="text-black" key={file.path} value={file.path}>
                {file.path}
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
      </div>
    </div>
  );
}
