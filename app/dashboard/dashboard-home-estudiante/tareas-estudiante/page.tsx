import { getTareaById } from "@/app/lib/actions";

export default async function TareasEstudiante({
    searchParams,
  }: {
    searchParams: { id: string };
  }) {

    const { id } = searchParams;

    const tarea = await getTareaById(id)

    return (
       <h1>Hola</h1>
    )

}