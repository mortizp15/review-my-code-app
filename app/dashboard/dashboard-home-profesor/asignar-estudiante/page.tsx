import { getEstudiantes } from "@/app/lib/actions";
import { EstudianteSearch } from "@/app/lib/types";
import TablaEstudiantes from "@/app/ui/profesor/tabla-estudiantes";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function AsignarEstudiante({ searchParams } : { searchParams: { idCurso: string } }) { 

    const id = searchParams.idCurso;
    const estudiantes = await getEstudiantes();

    // Validar estudiante relacionado
    const validarAsignacion = async (idEstudiante: string) : Promise<boolean> => {

        "use server"

        const supabase = createServerActionClient({ cookies })

         // Validar si ya esta apuntado al curso
         const { data: asignacionExistente } = await supabase
         .from("estudiante_curso")
         .select()
         .match({ id_estudiante: idEstudiante, id_curso: id })
         .single();

        // Si ya existe la asignación, evitar insertar duplicado
        if (asignacionExistente) {
            return true
        } else {
            return false
        }
    }

    // Desasignar estudiante de un curso
    const desasignarEstudiante = async (idEstudiante: string) => {
            
            "use server"
    
            const supabase = createServerActionClient({ cookies })
    
            const { error } = await supabase
            .from("estudiante_curso")
            .delete()
            .match({ id_estudiante: idEstudiante, id_curso: id })
            .select()
    
            if (error) {
                console.error('Error al eliminar:', error)
            }
    }

    // Asignar estudiante a un curso
    const asignarEstudiante = async (idEstudiante: string) : Promise<boolean> => {

        "use server"

        const supabase = createServerActionClient({ cookies })
        const validarRelacion = await validarAsignacion(idEstudiante)

        // Si no existe la asignación, insertar
        if(!validarRelacion) {
           const { error } = await supabase
            .from("estudiante_curso")
            .insert([{ id_estudiante: idEstudiante, id_curso: id }])
            .select()

            if (error) {
                console.error('Error al insertar:', error)
                return false
            } else {
                return true
            }

        } else {
            return true
        }
    }

    return (
        <section className="w-[90%] h-full flex flex-col items-center justify-center">
            <h1 className="text-white mb-10 font-semibold text-[30px]">Asignar Estudiante</h1>
            
            <div className="relative w-[50%] overflow-x-auto max-h-96 overflow-y-auto shadow-md sm:rounded-lg">
                <TablaEstudiantes desasignarEstudiante={desasignarEstudiante} estudiantes={estudiantes as unknown as EstudianteSearch[]} validarAsignacion={validarAsignacion} asignarEstudiante={asignarEstudiante}/>
            </div>
        </section>
    )

}