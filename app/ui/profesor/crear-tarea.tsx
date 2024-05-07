
export default function CrearTareaForm({ crearTarea } : { crearTarea: (formData: FormData) => void}) {
    return (
        <section className="flex flex-col w-[40%] h-[60%] text-white items-center justify-center">
            <h1 className="text-[35px] font-bold ">Crear Tarea</h1>
            <form className="flex flex-col mt-5 w-full" action={crearTarea}>
                <label htmlFor="nombre" className="text-[18px] font-semibold mt-4 mb-2">Nombre de la tarea</label>
                <input required type="text" className="h-[35px] text-black px-3 focus:outline-none rounded-md placeholder:text-[#33333356] placeholder:font-medium bg-[#e0e0e0]" name="nombre" placeholder="Consulta extractora de socios..." />
                <label htmlFor="descripcion" className="text-[18px] font-semibold mt-4 mb-2">Descripcion de la tarea</label>
                <textarea required className=" text-black px-3 focus:outline-none rounded-md placeholder:text-[#33333356] placeholder:font-medium bg-[#e0e0e0]" name="descripcion" placeholder="Debéis hacer una consulta SELECT para..." />
                <label htmlFor="fechainicio" className="text-[18px] font-semibold mt-4 mb-2">Fecha de inicio de la tarea</label>
                <input required type="date" className="h-[35px] text-black px-3 focus:outline-none rounded-md placeholder:text-[#33333356] placeholder:font-medium bg-[#e0e0e0]" name="fechainicio" />
                <label htmlFor="fechafin" className="text-[18px] font-semibold mt-4 mb-2">Fecha de finalización de la tarea</label>
                <input required type="date" className="h-[35px] text-black px-3 focus:outline-none rounded-md placeholder:text-[#33333356] placeholder:font-medium bg-[#e0e0e0]" name="fechafin" />
                <button className="mt-10 w-full bg-blue-500 py-2 rounded-md font-semibold">Crear tarea</button> 
            </form>
        </section>
    )
}