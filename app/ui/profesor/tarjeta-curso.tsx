import { Curso, Usuario } from "@/app/lib/definitions";

export default function TarejetaCurso({ cursos, profesor } : { cursos: Curso[], profesor: Usuario[]}) {

    return (
        <div className="w-full h-full flex flex-wrap gap-10">
            {cursos.map((curso) => (
                <div key={curso.id} className="border-2 border-white h-[40%] overflow-ellipsis overflow-hidden w-[20%] text-white p-4 m-4 rounded-lg">
                    <h1>{curso.nombre_curso}</h1>
                    <p>{curso.descripcion_curso}</p>
                    {profesor.map((prof) => (
                        <p key={prof.id}>{prof.nombre_de_usuario}</p>
                    ))}
                </div>
            ))}
        </div>
    )
}