"use client";

import { getContenidoArchivo, getContenidoRepo } from "@/app/lib/services";
import { Repo } from "@/app/lib/types";
import Editor from "@monaco-editor/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import EnviarCorreccion from "./enviar-correccion";
import { FileTreeItem } from "./file-tree-item";
import { set } from "date-fns";

export default function EditorRepos({
  enviarComentario,
  owner,
  nombreRepo,
}: {
  enviarComentario: (formData: FormData) => void;
  owner: string;
  nombreRepo: string;
}) {
  const ICON = "</>";
  const [fileTree, setFileTree] = useState<Repo[]>([]);
  const [extension, setExtension] = useState<string>("");
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

  // Crear estructura jeraquizada de los archivos de un repositorio
  function createTreeStructure(entries: Repo[]) {
    let root = {
      path: "/",
      type: "tree",
      children: [] as any[],
    };

    entries.forEach((entry) => {
      const parts = entry.path.split("/");
      let current = root;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const isLast = i === parts.length - 1;
        let child = current.children.find((c) => c.path === part);

        if (!child) {
          child = {
            path: part,
            type: isLast ? entry.type : "tree",
            children: [],
            ...(isLast ? { sha: entry.sha } : {}),
          };

          current.children.push(child);
        }
        current = child;
      }
    });

    if(root.children.length > 0) return root.children;
  }

  // Llamar a la API de GitHub para obtener el contenido del repositorio
  useEffect(() => {
    getContenidoRepo(owner, nombreRepo)
      .then((contenido) => {
        const tree = createTreeStructure(contenido.tree) as Repo[];
        setFileTree(tree);
      })
      .catch((error) => {
        console.error("Error al obtener el contenido del repo", error);
      });
  }, [owner, nombreRepo]);

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
    const extension = file.path.split(".").pop();
    switch (extension) {
      case "js":
        setExtension("javascript");
        break;
      case "ts":
        setExtension("typescript");
        break;
      case "py":
        setExtension("python");
        break;
      default: setExtension(extension ?? "");
    }
    // Obtener el contenido del archivo seleccionado
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
      <div className="w-[20%] overflow-y-auto overflow-x-hidden bg-[#131313] text-white p-4">
        <Link
          href="/dashboard/dashboard-home-profesor"
          className="font-bold text-[19px] w-fit border-2 mt-3 border-2-white p-2 rounded-full flex items-center text-white mx-auto mb-14"
        >
          {ICON}
        </Link>
        {
          fileTree.map((item) => (
              (item.children ?? []).length > 0 && (
                <FileTreeItem
                key={item.sha}
                item={item}
                handleFileSelect={handleFileSelect}
                />
              )
          ))
        }
      </div>
      <div className="w-full">
        <Editor
          height="100%"
          width="80%"
          theme="vs-dark"
          language={extension}
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
        <EnviarCorreccion
          enviarComentario={enviarComentario}
          fileTree={fileTree as unknown as Repo[]}
        />
      </div>
    </div>
  );
}
