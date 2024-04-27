"use client"

export default function TareasPendientes() {

    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-4 px-20 py-16">
            <div className="h-64 rounded-md text-white p-7 col-span-2 row-span-2 shadow-md shadow-[#33333386] bg-[#6363ee]">
                <h1 className="text-[20px] font-bold">Tareas Pendientes de Entregar</h1>
            </div>
            <div className="col-span-2 rounded-md row-span-2 text-white p-7 col-start-1 row-start-3 shadow-md shadow-[#33333386] bg-[#1B1B24]">
                <h1 className="text-[20px] font-bold">Cursos Asignados</h1>
            </div>
            <div className="row-span-4 col-start-3 row-start-1 bg-gradient-to-r from-slate-600 to-slate-900">9</div>
        </div>
    )

}