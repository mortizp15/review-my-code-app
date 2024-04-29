import { getTareaById, getUsuarioId } from "@/app/lib/actions";
import EnviarTarea from "@/app/ui/tarea/enviar-tarea";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function TareasEstudiante({
    searchParams,
  }: {
    searchParams: { id: string };
  }) {

    const { id } = searchParams;

    const idEstudiante = await getUsuarioId()

    const tarea = await getTareaById(id)

    const addTarea = async (formData: FormData) => {
        "use server";
    
        const supabase = createServerActionClient({ cookies });
    
        const extension = formData.get("archivo")?.toString().split(".").pop();
    
        const objetoAInsertar: {
          id_tarea: string;
          id_estudiante: string;
          fecha_hora_envio: string;
          archivo_zip_github?: File;
          archivo_de_codigo_individual?: File;
        } = {
          id_tarea: formData.get("idTarea") as string,
          id_estudiante: formData.get("idEstudiante") as string,
          fecha_hora_envio: new Date().toISOString(),
        };
    
        if (extension === "zip") {
          objetoAInsertar["archivo_zip_github"] = formData.get("archivo") as File;
        } else {
          objetoAInsertar["archivo_de_codigo_individual"] = formData.get(
            "archivo"
          ) as File;
        }
    
        await supabase
          .from("envio_de_tarea")
          .insert([objetoAInsertar])
          .select();
    
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
            <EnviarTarea addTarea={addTarea} idTarea={id} idEstudiante={idEstudiante as unknown as string}/>
       </section>
    )

}