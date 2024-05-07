import { getCursosDeProfesor, getUsuarioById } from "@/app/lib/actions"
import { Curso, Usuario } from "@/app/lib/definitions"
import TarjetaCurso from "@/app/ui/profesor/tarjeta-curso"
import Link from "next/link"
import { GoPlus } from "react-icons/go"

export default async function CursosProfesorPage() {


    let idProfesor: string = ""
    const cursos = await getCursosDeProfesor()
    cursos?.map(curso => {
        idProfesor = curso.id_profesor_creador
    })
    const profesor = await getUsuarioById(idProfesor as string)

    return (
        <section className="flex flex-col text-white p-14 w-[90%] h-full">
            <div className="w-full flex items-center justify-between">
                    <h1 className="text-[30px] font-semibold mb-2">Tus Cursos</h1>
                    <Link className="flex items-center transition hover:bg-[#333] py-2 px-4 rounded-full text-blue-500 gap-2 font-semibold" href={`/dashboard/dashboard-home-profesor/crear-curso`}><GoPlus style={{
                    fontSize: "20px",
                    fontWeight: "bold"            
                    }}/> Crear Curso</Link>
            </div>
            <hr className="mb-3"/>
            <TarjetaCurso cursos={cursos as unknown as Curso[]} profesor={profesor as unknown as Usuario[]} />
        </section>
    )
}