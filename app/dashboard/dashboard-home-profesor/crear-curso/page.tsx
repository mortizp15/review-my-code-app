import CrearCursoForm from "@/app/ui/profesor/crear-curso";
import { createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function CrearCursoPage() {

    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getUser()

    const crearCurso = async (formData: FormData) => {
        "use server"

        const supabase = createServerActionClient({ cookies });

        const nombre = formData.get("nombre") as string;
        const descripcion = formData.get("descripcion") as string;

        const objetoAInsertar = {
            id_profesor_creador: data.user?.id,
            nombre_curso: nombre,
            descripcion_curso: descripcion,
        }

        await supabase
            .from("curso")
            .insert([objetoAInsertar])
            .select();

        revalidatePath(`/dashboard/dashboard-home-profesor/cursos`)
        redirect(`/dashboard/dashboard-home-profesor/cursos`)

    }

    return (
        <section className="w-[90%] h-full flex items-center justify-center">
            <CrearCursoForm crearCurso={crearCurso}/>
        </section>
    )
}