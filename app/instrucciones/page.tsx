"use client"

export default function Intrucciones() {

  return (
    <div className="w-full h-full overflow-auto text-white flex flex-col px-24 py-10">
      <article className="mx-64">
        <h1 className="text-[40px] font-semibold">Introducción</h1>
        <p className="mt-5 text-wrap">
          En el mundo de la educación en tecnología, la revisión de código es
          una práctica fundamental para mejorar las habilidades de programación
          de los estudiantes y fomentar un aprendizaje colaborativo. Con ese
          fin, presentamos ReviewMyCode, una herramienta diseñada
          específicamente para ayudar a los profesores a facilitar y optimizar
          el proceso de revisión de código en el aula.
        </p>
        <br />
        <p className="mt-5 text-wrap">
          <strong className="text-[#77adff]">1. Revisión de Código desde el navegador</strong>
        </p>
        <p className="mt-2">
          ReviewMyCode permite a los profesores y estudiantes realizar
          revisiones de código desde un editor integrado en el navegador, lo que facilita la identificación
          y corrección de errores de manera rápida y sin necesidad de descargar nada. 
        </p>
        <br />
        <p>
          <strong className="text-[#77adff]">2. Comentarios Contextuales y Sugerencias</strong>
        </p>
        <p className="mt-2">
          Nuestra plataforma ofrece herramientas
          integradas para agregar comentarios contextuales y sugerencias
          directamente en el código, lo que facilita la comunicación entre
          profesores y estudiantes. Los comentarios pueden incluir explicaciones
          detalladas, consejos de mejora y referencias a recursos adicionales,
          proporcionando una retroalimentación valiosa y personalizada. 
        </p> 
        <br />
        <p>
          <strong className="text-[#77adff]">3. Seguimiento del Progreso y Desempeño</strong>
        </p>
        <p className="mt-2">
          ReviewMyCode permite a los profesores realizar un seguimiento del progreso y desempeño de sus estudiantes
          a través de plazos de entrega y listados de entregas.
        </p>
      </article>
      <article className="mx-64 mt-14">
        <h1 className="text-[40px] font-semibold">
          Solicitar un Rol en la Aplicación
        </h1>
        <p className="mt-5 text-wrap">
          Si eres un nuevo usuario y deseas acceder
          a la aplicación, necesitarás solicitar un rol apropiado a través del
          proceso de registro. Aunque ya has realizado el registro con Github,
          se te asigna un rol de <strong>inivtado</strong> por defecto. 
          A continuación, te explicamos cómo solicitar un rol de <strong className="text-[#77adff]">
            profesor 
          </strong> o <strong className="text-[#77adff]">
             estudiante
          </strong> en la aplicación:
        </p>
        <br />
        <h2 className="text-[25px] font-semibold">
          Paso 1: Entra al dashboard
        </h2>
        <p className="mt-2">
          En la esquina superior derecha de la página principal, haz clic en el boton &quot;Entrar&quot;.
          Una vez dentro, se te pedirá que pinches en uno de los dos roles posibles: <strong>profesor</strong> o <strong>estudiante</strong>.
          Cuando pinches en cualquierda de los dos, automaticamente te redirigirá a la página de inicio de tu dashboard.
        </p>
        <br />
        <h2 className="text-[25px] font-semibold">
          Paso 2: ¡Entra en ReviewMyCode!
        </h2>
        <p className="mt-2">
          Como ves, es bastante sencillo, pero hay que tener en cuenta una cosa: no está permitido cambiar el rol por tu cuenta una vez que se ha seleccionado.
          Para ello, es necesario contactar con el administrador del centro / institución para que nos solicite el cambio.
          Esto sería todo, esperamos que te sea util esta guía y que disfrutes de la aplicación. ¡Bienvenido a ReviewMyCode!
        </p>
      </article>
    </div>
  );
}
