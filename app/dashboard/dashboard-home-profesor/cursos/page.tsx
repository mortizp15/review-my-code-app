import { getCursosDeProfesor, getUsuarioById } from "@/app/lib/actions"
import { Curso, Usuario } from "@/app/lib/definitions"
import TarejetaCurso from "@/app/ui/profesor/tarjeta-curso"

export default async function CursosProfesorPage() {


    let idProfesor: string = ""
    const cursos = await getCursosDeProfesor()
    cursos?.map(curso => {
        idProfesor = curso.id_profesor_creador
    })
    const profesor = await getUsuarioById(idProfesor as string)

    return (
        <section className="text-white p-14 w-[90%] h-full">
            <TarejetaCurso cursos={cursos as unknown as Curso[]} profesor={profesor as unknown as Usuario[]} />
        </section>
    )
}