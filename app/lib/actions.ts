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
    .select("*")
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
    .select("*");

  return tareasPendientes;
}

// Obtiene las tareas de un curso
export async function getTareaByCurso(idCurso: string) {
  const supabase = createServerComponentClient({ cookies });
  let { data: tareas } = await supabase
    .from("tarea")
    .select("*")
    .eq("id_curso", idCurso);

  return tareas;
}

// Obtiene las tareas creadas por un profesor
export async function getTareasByProfesor() {
  const supabase = createServerComponentClient({ cookies });
  const idProfesor = await getUsuarioId();
  let { data: tareas } = await supabase
    .from("tarea")
    .select("*")
    .eq("id_profesor", idProfesor);

  return tareas;
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

// Obtiene los cursos de un profesor
export async function getCursosDeProfesor() {
  const supabase = createServerComponentClient({ cookies });
  const idProfesor = await getUsuarioId();
  let { data: cursos } = await supabase
    .from("curso")
    .select("*")
    .eq("id_profesor_creador", idProfesor);

  return cursos;
}

// Obtener todos los estudiantes
export async function getEstudiantes() {
  const supabase = createServerComponentClient({ cookies });
  let { data: estudiantes } = await supabase
    .from("usuario")
    .select("*")
    .eq("rol", "estudiante");

  return estudiantes;
}

// Obtiene la tarea enviada por un estudiante
export async function getTareasEnviadas(idTarea: string) {
  const supabase = createServerComponentClient({ cookies });
  const idEstudiante = await getUsuarioId();
  let { data: tareasEnviadas } = await supabase
    .from("envio_de_tarea")
    .select("*")
    .eq("id_estudiante", idEstudiante)
    .eq("id_tarea", idTarea);

  return tareasEnviadas;
}

// Obtiene el id del envio de una tarea
export async function getIdTareaEnviada(idEstudiante: string, idTarea: string) {
  const supabase = createServerComponentClient({ cookies });
  let { data: tareasEnviadas } = await supabase
    .from("envio_de_tarea")
    .select("id")
    .eq("id_estudiante", idEstudiante)
    .eq("id_tarea", idTarea);

  return tareasEnviadas;
}


// Obtiene una lista de los estudiante pertenecientes a una tarea
export async function getEstudiantesPorTarea(idTarea: string) {
  const supabase = createServerComponentClient({ cookies });
  let { data: curso } = await supabase
    .from("tarea")
    .select("id_curso")
    .eq("id", idTarea);

  if (curso && curso?.length !== 0) {
    let { data: estudiantes } = await supabase
      .from("estudiante_curso")
      .select("*")
      .eq("id_curso", curso[0].id_curso);

    if (estudiantes && estudiantes?.length !== 0) {
      let { data: estudiantesInfo } = await supabase
        .from("usuario")
        .select("*")
        .in(
          "id",
          estudiantes.map((estudiante) => estudiante.id_estudiante)
        );

      return estudiantesInfo;
    }
  }
}

// Obtiene el nombre del repo y su dueño
export async function getRepoInfo(idTarea: string) {
  const supabase = createServerComponentClient({ cookies });
  const objetoRetorno = {
    owner: "",
    nombreRepo: "",
  }
  let { data: tarea } = await supabase
    .from("envio_de_tarea")
    .select("id_estudiante, nombre_repo")
    .eq("id_tarea", idTarea);
  

  if (tarea && tarea?.length !== 0) {
    objetoRetorno.nombreRepo = tarea[0].nombre_repo;
    const estudiante = await getUsuarioById(tarea[0].id_estudiante);
    if(estudiante) objetoRetorno.owner = estudiante[0].username;
  }

  return objetoRetorno
}


// Obtiene los comentarios de un envio de tarea
export async function getComentariosDeEnvio() {
  const supabase = createServerComponentClient({ cookies });
  const idEstudiante = await getUsuarioId()
  let { data: comentarios } = await supabase
    .from("comentario_de_code_review")
    .select("id_envio_tarea, texto_comentario, linea_codigo_comentada, archivo")
    .eq("id_usuario_estudiante", idEstudiante);

  return comentarios;
}

// Obtener el envio de una tarea por su ID
export async function getEnvioTareaById(idEnvio: string) {
  const supabase = createServerComponentClient({ cookies });
  let { data: envio } = await supabase
    .from("envio_de_tarea")
    .select("id_tarea")
    .eq("id", idEnvio);

  return envio;
}
