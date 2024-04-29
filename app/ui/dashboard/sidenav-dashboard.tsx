"use client";

import Link from "next/link";
import SignOut from "./signout";
import { Curso } from "@/app/lib/definitions";
import { FaRegFolder } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { ICON } from "@/app/layout";
import { IoGitNetworkOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

export default function SideNavDashBoard({
  cursos,
}: {
  cursos: Curso[] | undefined;
}) {
  return (
    <div className="bg-[#19181D] flex flex-col justify-between items-center left-0 w-[20rem] border-r-2 border-r-[#333] h-full p-10 ">
      <div className="flex flex-col mt-5  h-[80%] overflow-auto">
        <Link
          href="/"
          className="font-bold text-[19px] border-2 border-2-white p-2 rounded-full flex items-center text-white mx-auto mb-14"
        >
          {ICON}
        </Link>
        <h1 className="text-white font-bold text-[20px] mb-3">Menu</h1>
        <hr />
            <Link
            href="/dashboard/dashboard-home-estudiante"
            className="my-2 transition cursor-pointer w-full h-10 text-white p-4 rounded-lg hover:bg-[#58585873] font-semibold flex items-center"
            >
                <GoHome
                    style={{
                    marginRight: "10px",
                    fontSize: "20px",
                    }}
                />{" "}
                Inicio
            </Link>
            <Link
            href="/dashboard/dashboard-home-estudiante/tareas"
            className="my-2 transition cursor-pointer w-full h-10 text-white p-4 rounded-lg hover:bg-[#58585873] font-semibold flex items-center"
            >
                <IoGitNetworkOutline
                    style={{
                    marginRight: "10px",
                    fontSize: "20px",
                    }}
                />{" "}
                Tareas
            </Link>
            <Link
            href="/dashboard/dashboard-home-estudiante/code-review"
            className="my-2 transition cursor-pointer w-full h-10 text-white p-4 rounded-lg hover:bg-[#58585873] font-semibold flex items-center"
            >
                <LuEye
                    style={{
                    marginRight: "10px",
                    fontSize: "20px",
                    }}
                />{" "}
                Code Review
            </Link>
        <h1 className="text-white font-bold text-[20px] mb-3 mt-10">Tus Cursos</h1>
        <hr />
        {cursos?.map((curso) => {
          return (
            <Link
              key={curso.id}
              href={`/dashboard/dashboard-home-estudiante/curso?id=${curso.id}`}
              className="my-2 transition cursor-pointer w-full h-20 text-white p-4 rounded-lg hover:bg-[#58585873] font-semibold flex flex-col"
            >
              <h3 className="flex items-center">
                <FaRegFolder
                  style={{
                    marginRight: "10px",
                  }}
                />{" "}
                {curso.nombre_curso}
              </h3>
              <p className="text-gray-400 font-normal text-[14px] overflow-ellipsis overflow-hidden">
                {curso.descripcion_curso}
              </p>
            </Link>
          );
        })}
      </div>
      <SignOut />
    </div>
  );
}
