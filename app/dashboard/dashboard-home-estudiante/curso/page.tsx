import {
  getCursoPorId,
  getTareaByCurso,
  getTareasEnviadas,
  getTareasPendientes,
  getUsuarioById,
  getUsuarioId,
} from "@/app/lib/actions";
import { Curso, Tarea } from "@/app/lib/definitions";
import InfoCurso from "@/app/ui/curso/info-curso";

export type TypeTareasPendientes  = {
  descripcion_tarea: string | null;
  fecha_finalizacion: string | null;
  fecha_inicio: string | null;
  id: string | null;
  id_curso: string | null;
  id_profesor: string | null;
  nombre_curso: string | null;
}

export default async function CursoPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {

  
  const { id } = searchParams;

  // Llamadas a los actions
  const idEstudiante = await getUsuarioId();
  const curso = await getCursoPorId(id);
  const profesor = await getUsuarioById(
    curso?.map((curso) => curso.id_profesor_creador) as unknown as string
  );
  const tareasDelCurso = await getTareaByCurso(id);
  const tareas_pendientes = idEstudiante ? await getTareasPendientes(idEstudiante.toString()) : [];
  


  let usuario = "";

  profesor?.map((profesor) => {
    usuario = profesor.username;
  });

  return (
    <section className="w-[90%] h-full overflow-auto ">
      <InfoCurso
        id={id}
        tareas_pendientes={tareas_pendientes as unknown as TypeTareasPendientes[]}
        curso={curso as unknown as Curso[]}
        profesor={usuario}
        tareas={tareasDelCurso as unknown as Tarea[]}
      />
    </section>
  );
}
