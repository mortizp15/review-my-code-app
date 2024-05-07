import { Curso, Usuario } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

export default function TarjetaCurso({ cursos, profesor } : { cursos: Curso[], profesor: Usuario[]}) {


    return (
        <div className="w-full h-full flex flex-wrap gap-10">
            {cursos.map((curso) => (
                <div key={curso.id} className="border-2 border-white h-fit overflow-ellipsis overflow-hidden w-[20%] text-white p-4 m-4 rounded-lg">
                    {profesor.map((prof) => (
                        <Image key={prof.id} className="w-15 h-15 rounded-full cursor-pointer" src={prof.avatar_url || ""} alt="avatar" width={50} height={50} />
                    ))}
                    <h1 className="text-[20px] font-semibold mt-5">{curso.nombre_curso}</h1>
                    <p className="mt-2">{curso.descripcion_curso}</p>
                    <Link className="flex items-center gap-3 transition-all hover:gap-4 mt-2 text-blue-500 font-semibold" href={`/dashboard/dashboard-home-profesor/curso?id=${curso.id}`}>Ir al curso <FaArrowRightLong /></Link>
                    <Link className="flex items-center gap-3 transition-all hover:text-blue-400 mt-2 text-blue-500 font-semibold" href={`/dashboard/dashboard-home-profesor/asignar-estudiante?idCurso=${curso.id}`}>Asignar Estudiantes <GoPlus style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold"
                    }} /></Link>
                </div>
            ))}
        </div>
    )
}