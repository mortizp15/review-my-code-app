export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type EstudianteSearch = {
  id: string,
  avatar_url: string | null,
  nombre: string,
  username: string
}


export type Database = {
  public: {
    Tables: {
      comentario_de_code_review: {
        Row: {
          id: string
          id_envio_tarea: string
          id_usuario_estudiante: string
          id_usuario_profesor: string
          linea_codigo_comentada: number | null
          texto_comentario: string
        }
        Insert: {
          id?: string
          id_envio_tarea: string
          id_usuario_estudiante: string
          id_usuario_profesor: string
          linea_codigo_comentada?: number | null
          texto_comentario: string
        }
        Update: {
          id?: string
          id_envio_tarea?: string
          id_usuario_estudiante?: string
          id_usuario_profesor?: string
          linea_codigo_comentada?: number | null
          texto_comentario?: string
        }
        Relationships: [
          {
            foreignKeyName: "comentario_de_code_review_id_envio_tarea_fkey"
            columns: ["id_envio_tarea"]
            isOneToOne: false
            referencedRelation: "envio_de_tarea"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comentario_de_code_review_id_usuario_estudiante_fkey"
            columns: ["id_usuario_estudiante"]
            isOneToOne: false
            referencedRelation: "usuario"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comentario_de_code_review_id_usuario_profesor_fkey"
            columns: ["id_usuario_profesor"]
            isOneToOne: false
            referencedRelation: "usuario"
            referencedColumns: ["id"]
          },
        ]
      }
      curso: {
        Row: {
          descripcion_curso: string | null
          id: string
          id_profesor_creador: string
          nombre_curso: string
        }
        Insert: {
          descripcion_curso?: string | null
          id?: string
          id_profesor_creador: string
          nombre_curso: string
        }
        Update: {
          descripcion_curso?: string | null
          id?: string
          id_profesor_creador?: string
          nombre_curso?: string
        }
        Relationships: [
          {
            foreignKeyName: "curso_id_profesor_creador_fkey"
            columns: ["id_profesor_creador"]
            isOneToOne: false
            referencedRelation: "usuario"
            referencedColumns: ["id"]
          },
        ]
      }
      envio_de_tarea: {
        Row: {
          archivo_de_codigo_individual: string | null
          archivo_zip_github: string | null
          fecha_hora_envio: string | null
          id: string
          id_estudiante: string
          id_tarea: string
        }
        Insert: {
          archivo_de_codigo_individual?: string | null
          archivo_zip_github?: string | null
          fecha_hora_envio?: string | null
          id?: string
          id_estudiante: string
          id_tarea: string
        }
        Update: {
          archivo_de_codigo_individual?: string | null
          archivo_zip_github?: string | null
          fecha_hora_envio?: string | null
          id?: string
          id_estudiante?: string
          id_tarea?: string
        }
        Relationships: [
          {
            foreignKeyName: "envio_de_tarea_id_estudiante_fkey"
            columns: ["id_estudiante"]
            isOneToOne: false
            referencedRelation: "usuario"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "envio_de_tarea_id_tarea_fkey"
            columns: ["id_tarea"]
            isOneToOne: false
            referencedRelation: "tarea"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "envio_de_tarea_id_tarea_fkey"
            columns: ["id_tarea"]
            isOneToOne: false
            referencedRelation: "vista_tareas_pendientes"
            referencedColumns: ["id"]
          },
        ]
      }
      estudiante_curso: {
        Row: {
          id: number
          id_curso: string | null
          id_estudiante: string | null
        }
        Insert: {
          id?: number
          id_curso?: string | null
          id_estudiante?: string | null
        }
        Update: {
          id?: number
          id_curso?: string | null
          id_estudiante?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estudiante_curso_id_curso_fkey"
            columns: ["id_curso"]
            isOneToOne: false
            referencedRelation: "curso"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "estudiante_curso_id_estudiante_fkey"
            columns: ["id_estudiante"]
            isOneToOne: false
            referencedRelation: "usuario"
            referencedColumns: ["id"]
          },
        ]
      }
      tarea: {
        Row: {
          descripcion_tarea: string
          fecha_finalizacion: string
          fecha_inicio: string
          id: string
          id_curso: string
          id_profesor: string | null
        }
        Insert: {
          descripcion_tarea: string
          fecha_finalizacion: string
          fecha_inicio: string
          id?: string
          id_curso: string
          id_profesor?: string | null
        }
        Update: {
          descripcion_tarea?: string
          fecha_finalizacion?: string
          fecha_inicio?: string
          id?: string
          id_curso?: string
          id_profesor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tarea_id_curso_fkey"
            columns: ["id_curso"]
            isOneToOne: false
            referencedRelation: "curso"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tarea_id_profesor_fkey"
            columns: ["id_profesor"]
            isOneToOne: false
            referencedRelation: "usuario"
            referencedColumns: ["id"]
          },
        ]
      }
      usuario: {
        Row: {
          avatar_url: string | null
          id: string
          nombre: string
          rol: string
          username: string
        }
        Insert: {
          avatar_url?: string | null
          id: string
          nombre: string
          rol: string
          username: string
        }
        Update: {
          avatar_url?: string | null
          id?: string
          nombre?: string
          rol?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "usuario_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      vista_tareas_pendientes: {
        Row: {
          descripcion_tarea: string | null
          fecha_finalizacion: string | null
          fecha_inicio: string | null
          id: string | null
          id_curso: string | null
          id_profesor: string | null
          nombre_curso: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tarea_id_curso_fkey"
            columns: ["id_curso"]
            isOneToOne: false
            referencedRelation: "curso"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tarea_id_profesor_fkey"
            columns: ["id_profesor"]
            isOneToOne: false
            referencedRelation: "usuario"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      rol_usuario: "admin" | "estudiante" | "profesor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
