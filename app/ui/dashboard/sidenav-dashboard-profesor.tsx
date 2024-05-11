"use client"

import Link from "next/link";
import SignOut from "./signout";
import { GoHome } from "react-icons/go";
import { MdOutlineClass } from "react-icons/md";
import { PiChalkboardTeacher } from "react-icons/pi";
import { useState } from "react";

export default function SidenavDashboardProfesor() {

    const [activo, setActivo] = useState("")
    const ICON = "</>"

    const handleClick = (ruta: string) => {
        setActivo(ruta)
    }

    return (
    <div className="bg-[#19181D] flex flex-col justify-between items-center left-0 w-[20rem] border-r-2 border-r-[#333] h-full p-10 ">
      <div className="flex flex-col mt-5 h-[80%] overflow-auto">
        <Link
          href="/"
          className="font-bold text-[19px] border-2 border-2-white p-2 rounded-full flex items-center text-white mx-auto mb-14"
        >
          {ICON}
        </Link>
        <h1 className="text-white font-bold text-[20px] mb-3">Menu</h1>
        <hr />
            <Link
            onClick={() => handleClick("/dashboard/dashboard-home-profesor")}
            href="/dashboard/dashboard-home-profesor"
            className={`my-2 transition cursor-pointer w-full h-10 text-white p-4 rounded-lg ${ activo === "/dashboard/dashboard-home-profesor" ? "bg-[#58585873]" : "bg-transparent" }  hover:bg-[#58585873] font-semibold flex items-center`}
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
            onClick={() => handleClick("/dashboard/dashboard-home-profesor/cursos")}
            href="/dashboard/dashboard-home-profesor/cursos"
            className={`my-2 transition cursor-pointer w-full h-10 text-white p-4 rounded-lg ${ activo === "/dashboard/dashboard-home-profesor/cursos" ? "bg-[#58585873]" : "bg-transparent" }  hover:bg-[#58585873] font-semibold flex items-center`}
            >
                <MdOutlineClass
                    style={{
                    marginRight: "10px",
                    fontSize: "20px",
                    }}
                />{" "}
                Cursos
            </Link>
            <Link
            onClick={() => handleClick("/dashboard/dashboard-home-profesor/tareas-creadas")}
            href="/dashboard/dashboard-home-profesor/tareas-creadas"
            className={`my-2 transition cursor-pointer w-full h-10 text-white p-4 rounded-lg ${ activo === "/dashboard/dashboard-home-profesor/tareas-creadas" ? "bg-[#58585873]" : "bg-transparent" }  hover:bg-[#58585873] font-semibold flex items-center`}
            >
                <PiChalkboardTeacher
                    style={{
                    marginRight: "10px",
                    fontSize: "20px",
                    }}
                />{" "}
                Tareas Creadas
            </Link>
      </div>
      <SignOut />
    </div>
    )
}