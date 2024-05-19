import { getEstudiantesPorTarea, getTareasEnviadas } from "@/app/lib/actions";
import { EnvioDeTarea, Usuario } from "@/app/lib/definitions";
import TablaEstudiantesTarea from "@/app/ui/profesor/tabla-estudiantes-tarea";

export default async function PageTareasProfesor({
    searchParams
} : {
    searchParams: { id: string}
}) {

    let idEstudiante = ""
    const idTarea = searchParams.id;
    const estudiantesDeTarea = await getEstudiantesPorTarea(idTarea)
    estudiantesDeTarea?.map((estudiante) => {
        idEstudiante = estudiante.id
    })
    const tareasEnviadas = await getTareasEnviadas(idEstudiante, idTarea);
   

  return (
    <section className="relative w-full flex items-center pt-20 flex-col overflow-x-auto h-full overflow-y-auto">
      <TablaEstudiantesTarea idTarea={idTarea} tareasEnviadas={tareasEnviadas as unknown as EnvioDeTarea[]} estudiantesDeTarea={estudiantesDeTarea as unknown as Usuario[]}/>
    </section>
  );
}