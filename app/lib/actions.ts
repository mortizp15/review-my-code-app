import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// Obtiene el ID del estudiante que esya logueado
export async function getUsuarioId() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  let { data: idEstudiante } = await supabase
    .from("usuario")
    .select("id")
    .eq("username", session?.user.user_metadata.user_name);

  idEstudiante?.map((idEstudianteBuscado) => {
    const { id: idEstudianteResultado } = idEstudianteBuscado;

    idEstudiante = idEstudianteResultado;
  });

  return idEstudiante;
}

// Obtiene el profesor por ID
export async function getUsuarioById(id: string) {
  const supabase = createServerComponentClient({ cookies });

  let { data: usuario } = await supabase
    .from("usuario")
    .select("username")
    .eq("id", id);

  return usuario;
}

// Obtiene los cursos de un estudiante
export async function getCursosDeEstudiante() {
  const supabase = createServerComponentClient({ cookies });
  const idEstudiante = await getUsuarioId();
  let { data: estudiante_curso } = await supabase
    .from("estudiante_curso")
    .select("id_curso, curso(*)")
    .eq("id_estudiante", idEstudiante);

  return estudiante_curso;
}

// Obtiene las tareas pendientes de un estudiante
export async function getTareasPendientes() {
  const supabase = createServerComponentClient({ cookies });
  let { data: tareasPendientes } = await supabase
    .from("vista_tareas_pendientes")
    .select("*")

  return tareasPendientes;
}

// Obtiene las tareas de un curso
export async function getTareaByCurso(idCurso: string) {
  const supabase = createServerComponentClient({ cookies });
  let { data: tareas } = await supabase
    .from("tarea")
    .select("*")
    .eq("id_curso", idCurso);

  return tareas
}

// Obtiene la info del curso por su ID
export async function getCursoPorId(idCurso: string) {
  const supabase = createServerComponentClient({ cookies });
  let { data: curso } = await supabase
    .from("curso")
    .select("*")
    .eq("id", idCurso);

  return curso;
}

// Obtiene una tarea por su ID
export async function getTareaById(idTarea: string) {
  const supabase = createServerComponentClient({ cookies });
  let { data: tarea } = await supabase
    .from("tarea")
    .select("*")
    .eq("id", idTarea);

  return tarea;
}
