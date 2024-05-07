import { getEstudiantes } from "@/app/lib/actions";
import { EstudianteSearch } from "@/app/lib/types";
import TablaEstudiantes from "@/app/ui/profesor/tabla-estudiantes";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function AsignarEstudiante({ searchParams } : { searchParams: { idCurso: string } }) { 

    const id = searchParams.idCurso;
    const estudiantes = await getEstudiantes();

    // Asignar estudiante a un curso
    const asignarEstudiante = async (idEstudiante: string) => {

        "use server"

        const supabase = createServerActionClient({ cookies })

        const { data, error } = await supabase
            .from("estudiante_curso")
            .insert([{ id_estudiante: idEstudiante, id_curso: id }])
            .select()

        console.log(error)
    }

    return (
        <section className="w-[90%] h-full flex flex-col items-center justify-center">
            <h1 className="text-white mb-10 font-semibold text-[30px]">Asignar Estudiante</h1>
            
            <div className="relative w-[50%] overflow-x-auto max-h-96 overflow-y-auto shadow-md sm:rounded-lg">
                <TablaEstudiantes estudiantes={estudiantes as unknown as EstudianteSearch[]} asignarEstudiante={asignarEstudiante}/>
            </div>
        </section>
    )

}