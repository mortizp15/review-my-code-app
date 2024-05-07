import CrearTareaForm from "@/app/ui/profesor/crear-tarea";
import { createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function CrearTarea({ searchParams }: { searchParams: { idCurso: string } }) {

    const id = searchParams.idCurso;
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getUser()

    const crearTarea = async (formData: FormData) => {
        "use server"

        const supabase = createServerActionClient({ cookies });

        const nombre = formData.get("nombre") as string;
        const descripcion = formData.get("descripcion") as string;
        const fechaInicio = formData.get("fechainicio") as string;
        const fechaFin = formData.get("fechafin") as string;

        const objetoAInsertar = {
            id_curso: id,
            descripcion_tarea: nombre,
            explicacion_tarea: descripcion,
            fecha_inicio: fechaInicio,
            fecha_finalizacion: fechaFin,
            id_profesor: data.user?.id
        }

        await supabase
            .from("tarea")
            .insert([objetoAInsertar])
            .select();

        revalidatePath(`/dashboard/dashboard-home-profesor/curso?id=${id}`)
        redirect(`/dashboard/dashboard-home-profesor/curso?id=${id}`)

    }

    return (
        <section className="w-[90%] h-full flex items-center justify-center">
            <CrearTareaForm crearTarea={crearTarea}/>
        </section>
    )
}