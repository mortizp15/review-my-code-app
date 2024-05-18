import {
  getCursoPorId,
  getTareaByCurso,
  getUsuarioById,
  getUsuarioId,
} from "@/app/lib/actions";
import { Curso, Tarea } from "@/app/lib/definitions";
import InfoCursoProfesor from "@/app/ui/profesor/info-curso-profesor";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function CursosProfesorPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { id } = searchParams;

  // Validar estudiante relacionado
  const estudiantePerteneciente = async (): Promise<boolean> => {
    "use server";

    const supabase = createServerActionClient({ cookies });
    const idEstudiante = await getUsuarioId()

    // Obtener el rol del usuario
    const { data: usuario } = await supabase
    .from("usuario")
    .select("rol")
    .eq("id", idEstudiante)
    .single();

    // Si el usuario no es un estudiante, retornar false
    if (usuario?.rol !== 'estudiante') {
      return false;
    }

    const { data: asignacionExistente } = await supabase
      .from("estudiante_curso")
      .select()
      .match({ id_estudiante: idEstudiante, id_curso: id })
      .single();

    if (asignacionExistente) {
      return true;
    } else {
      return false;
    }
  };

  const pertenece = await estudiantePerteneciente();
  if(!pertenece) {
    alert("No perteneces a este curso");
    redirect("/dashboard/dashboard-home-estudiante")
  }

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
