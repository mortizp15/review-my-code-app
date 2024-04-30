import { getTareaById, getUsuarioId } from "@/app/lib/actions";
import EnviarTarea from "@/app/ui/tarea/enviar-tarea";
import { Session, createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function TareasEstudiante({
    searchParams,
  }: {
    searchParams: { id: string };
  }) {

    const supabase = createServerComponentClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()

    const { id } = searchParams;

    const idEstudiante = await getUsuarioId()

    const tarea = await getTareaById(id)

    const addTarea = async (formData: FormData) => {
        "use server";
    
        const supabase = createServerActionClient({ cookies });
    
        const objetoAInsertar: {
          id_tarea: string;
          id_estudiante: string;
          fecha_hora_envio: string;
          nombre_repo: string;
        } = {
          id_tarea: formData.get("idTarea") as string,
          id_estudiante: formData.get("idEstudiante") as string,
          fecha_hora_envio: new Date().toISOString(),
          nombre_repo: formData.get("nombre_repo") as string,
        };
    
    
        await supabase
          .from("envio_de_tarea")
          .insert([objetoAInsertar])
          .select();
    
          revalidatePath("/dashboard/dashboard-home-estudiante/curso")
      };


    return (
       <section className="w-[90%]">
            {
                tarea?.map((tarea) => (
                    <div className="mx-auto text-white w-[70%] h-fit py-12 " key={tarea.id}>
                        <h1 className="text-blue-500 font-semibold text-[40px]">{tarea.descripcion_tarea}</h1>
                        <div className=" mt-5 flex items-center justify-between">
                            <p className="text-[#929292] font-medium">Finaliza el: {tarea.fecha_finalizacion}</p>
                            <p className="text-[#929292] font-medium">Fecha de publicación: {tarea.fecha_inicio}</p>
                        </div>
                        <hr className="mt-5" />
                        <p className="text-white mt-10">{tarea.explicacion_tarea}</p>
                    </div>
                ))
                
            }
            <EnviarTarea session={session as unknown as Session} addTarea={addTarea} idTarea={id} idEstudiante={idEstudiante as unknown as string}/>
       </section>
    )

}