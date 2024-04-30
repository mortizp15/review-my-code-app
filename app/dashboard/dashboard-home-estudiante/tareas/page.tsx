import { getTareasPendientes } from "@/app/lib/actions";
import TareasPendientes from "@/app/ui/dashboard/TareasPendientes";
import { TypeTareasPendientes } from "../curso/page";

export default async function TareasAlumno() {

    const tareasPendientes = await getTareasPendientes();

    return (
        <div className="text-white w-[40%] mx-auto">
            <TareasPendientes tareasPendientes={tareasPendientes as unknown as TypeTareasPendientes[]}/>
        </div>
    )
}