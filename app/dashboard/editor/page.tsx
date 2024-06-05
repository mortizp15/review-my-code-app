import { getIdTareaEnviada, getRepoInfo, getUsuarioId } from "@/app/lib/actions";
import EditorRepos from "@/app/ui/editor/editor-repos";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


export default async function PageEditor({ searchParams } : { searchParams: { idTarea: string, idEstudiante: string } }) {

    const idTarea = searchParams.idTarea;
    const idEstudiante = searchParams.idEstudiante;
    const infoRepo = await getRepoInfo(idTarea);
    const idEnvio = await getIdTareaEnviada(idEstudiante, idTarea);
    const idProfesor = await getUsuarioId()

    const owner = infoRepo.owner;
    const nombreRepo = infoRepo.nombreRepo;

    const enviarComentario = async (formData: FormData) => {

        "use server"

        const supabase = createServerActionClient({ cookies })
        let idEnvioTarea = ""

        if(idEnvio) {
            idEnvioTarea = idEnvio[0].id;
        }
        

        await supabase
            .from("comentario_de_code_review")
            .insert([
                {
                    id_envio_tarea: idEnvioTarea,
                    id_usuario_estudiante: idEstudiante,
                    id_usuario_profesor: idProfesor,
                    texto_comentario: formData.get("comentario") as string,
                    linea_codigo_comentada: formData.get("linea") as string,
                    archivo: formData.get("archivo") as string,
                    nombre_repo: formData.get("nombre_repo") as string,
                }
        ]);

        
    }

    return (
        <section className="w-full h-full flex flex-col items-center justify-center">
            <EditorRepos enviarComentario={enviarComentario} owner={owner} nombreRepo={nombreRepo} />
        </section>
    )

}