
export default function Page() {
  return (
    <div className="w-full h-full overflow-auto text-white flex flex-col px-24 py-10">
        <article className="mx-64">
            <h1 className="text-[40px] font-semibold">¿Cómo funciona el rol de Profesor?</h1>
            <p className="mt-5 text-wrap">
                Bien, este rol tiene muchas mas posibilidades que el rol de estudiante, 
                puesto que es el que maneja todo el envío de tareas, correcciones, cursos...
                En esta pagina se explicará como funciona el rol de profesor en ReviewMyCode y como usar sus funcionalidades.
            </p>
        </article>
        <article className="mx-64 mt-14">
            <h1 className="text-[40px] font-semibold">¿Cómo puedo crear un curso?</h1>
            <p className="mt-5 text-wrap">
                Para crear un curso, simplemente debes ir a la pestaña de "Cursos" y darle al botón de "Crear Curso". 
                Una vez hecho esto, se te redirigirá a una página en la que deberás rellenar los campos necesarios para la creación del curso.
                Una vez creado, podrás añadir estudiantes a este curso y asignar tareas a los mismos.
            </p>
        </article>
    </div>
  );
}