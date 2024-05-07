import { EnvioDeTarea, Usuario } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default function TablaEstudiantesTarea({
  idTarea,
  estudiantesDeTarea,
  tareasEnviadas,
}: {
  idTarea: string;
  estudiantesDeTarea: Usuario[];
  tareasEnviadas: EnvioDeTarea[];
}) {
  return (
    <>
      <h1 className="text-white text-[30px] mb-10 font-semibold">
        Entregas de esta tarea
      </h1>
      <table className="w-[40%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="text-center px-6 py-3">
              #
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Usuario
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {estudiantesDeTarea?.map((estudiante) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={estudiante.id}
            >
              <td className="px-6 py-4 flex justify-center">
                <Image
                  className="rounded-full"
                  width={30}
                  height={30}
                  src={estudiante.avatar_url || ""}
                  alt="avatar"
                />
              </td>
              <td className="px-6 py-4 text-center">{estudiante.username}</td>
              <td className="px-6 py-4 flex justify-center">
                {tareasEnviadas.length !== 0 ? (
                  <Link target="_blank" href={`/dashboard/editor?idTarea=${idTarea}&idEstudiante=${estudiante.id}`} className="bg-green-400 px-3 text-white font-medium py-1 rounded-full">
                    Ver Tarea
                  </Link>
                ) : (
                  <div className="bg-red-400 w-fit px-3 text-white font-medium py-1 rounded-full">
                    No Entregado
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
