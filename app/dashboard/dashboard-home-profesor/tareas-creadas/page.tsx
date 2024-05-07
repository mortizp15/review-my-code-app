import { Tarea } from "@/app/lib/definitions";
import TodasTareas from "@/app/ui/profesor/todas-tareas";
import { createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getTareasByProfesor } from "@/app/lib/actions";
import { Session } from "next-auth";
export default async function TareasCreadasPage() {
    
    const supabase = createServerComponentClient({ cookies });
    const { data: session } = await supabase.auth.getSession()
    const tareas = await getTareasByProfesor();
   
    const username = session.session?.user.user_metadata.user_name
   
    const eliminarTareaPorId = async (idTarea: string) => {

        "use server"

        const supabase = createServerActionClient({ cookies });

        await supabase
        .from("tarea")
        .delete()
        .eq("id", idTarea);
      
        revalidatePath("/dashboard/dashboard-home-profesor/tareas-creadas");
        
    }

    return (
        <TodasTareas eliminarTarea={eliminarTareaPorId} tareas={tareas as unknown as Tarea[]} />
    )
}