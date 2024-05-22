import { Tarea } from "@/app/lib/definitions";
import TodasTareas from "@/app/ui/profesor/todas-tareas";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { getTareasByProfesor } from "@/app/lib/actions";
export default async function TareasCreadasPage() {
    
    const tareas = await getTareasByProfesor();
   
   
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