
  export type Usuario = {
    id: number;
    nombre_de_usuario: string;
    correo_electronico: string;
    rol: 'admin' | 'estudiante' | 'profesor';
  };
  

  export type Curso = {
    id: number;
    id_profesor_creador: number;
    nombre_curso: string;
    descripcion_curso?: string; 
  };

  export type Tarea = {
    id: number;
    id_curso: number;
    descripcion_tarea: string;
    fecha_inicio: Date;
    fecha_finalizacion: Date;
    nombre_curso: string;
  };
  

  export type EnvioDeTarea = {
    id: number;
    id_tarea: number;
    id_estudiante: number;
    fecha_hora_envio: Date;
    archivo_de_codigo_individual?: string;
    archivo_zip_github?: Buffer;  
  };
  
  export type ComentarioDeCodeReview = {
    id: number;
    id_envio_tarea: number;
    id_usuario_estudiante: number;
    id_usuario_profesor: number;
    texto_comentario: string;
    linea_codigo_comentada?: number;  
  };
  