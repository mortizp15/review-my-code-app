import { getCursoPorId, getTareaByCurso, getTareasPendientes, getUsuarioById } from "@/app/lib/actions";
import { Curso, Tarea } from "@/app/lib/definitions";
import InfoCursoProfesor from "@/app/ui/profesor/info-curso-profesor";

export default async function CursosProfesorPage({ searchParams } : { searchParams: { id: string } }) {
    const { id } = searchParams;

    // Llamadas a los actions
    const curso = await getCursoPorId(id);
    const profesor = await getUsuarioById(
      curso?.map((curso) => curso.id_profesor_creador) as unknown as string
    );
    const tareasDelCurso = await getTareaByCurso(id);
  
    let usuario = "";
  
    profesor?.map((profesor) => {
      usuario = profesor.username;
    });
  
    return (
      <section className="w-[90%] h-full overflow-auto ">
        <InfoCursoProfesor
          id={id}
          curso={curso as unknown as Curso[]}
          profesor={usuario}
          tareas={tareasDelCurso as unknown as Tarea[]}
        />
      </section>
    );
}