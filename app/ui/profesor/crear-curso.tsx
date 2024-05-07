export default function CrearCursoForm({ crearCurso } : { crearCurso: (formData: FormData) => void }){


    return (
        <section className="flex flex-col w-[40%] h-[60%] text-white items-center justify-center">
            <h1 className="text-[35px] font-bold ">Crear Curso</h1>
            <form className="flex flex-col mt-5 w-full" action={crearCurso}>
                <label htmlFor="nombre" className="text-[18px] font-semibold mt-4 mb-2">Nombre del curso</label>
                <input required type="text" className="h-[35px] text-black px-3 focus:outline-none rounded-md placeholder:text-[#33333356] placeholder:font-medium bg-[#e0e0e0]" name="nombre" placeholder="Introducción a la programación" />
                <label htmlFor="descripcion" className="text-[18px] font-semibold mt-4 mb-2">Descripcion del curso</label>
                <textarea required className=" text-black py-2 px-3 focus:outline-none rounded-md placeholder:text-[#33333356] placeholder:font-medium bg-[#e0e0e0]" name="descripcion" placeholder="En este curso aprenderemos las bases de la programación..." />
                <button className="mt-10 w-full bg-blue-500 py-2 rounded-md font-semibold">Crear curso</button> 
            </form>
        </section>
    )
}