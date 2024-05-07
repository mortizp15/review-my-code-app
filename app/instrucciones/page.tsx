"use client"

import Link from "next/link";


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
          <strong className="text-[#77adff]">1. Revisión de Código en Tiempo Real</strong>
        </p>
        <p className="mt-2">
          PlataformaCode permite a los profesores y estudiantes realizar
          revisiones de código en tiempo real, lo que facilita la identificación
          y corrección de errores de manera rápida y eficiente. La capacidad de
          revisar el código mientras se está escribiendo promueve una
          retroalimentación inmediata y ayuda a los estudiantes a mejorar sus
          habilidades de programación de manera proactiva. 
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
          PlataformaCode permite a los
          profesores realizar un seguimiento del progreso y desempeño de los
          estudiantes a lo largo del tiempo, lo que facilita la evaluación y
          calificación del trabajo realizado. Los informes y estadísticas
          detalladas brindan una visión completa del rendimiento de cada
          estudiante, lo que permite una evaluación más precisa y una
          retroalimentación individualizada.
        </p>
      </article>
      <article className="mx-64 mt-14">
        <h1 className="text-[40px] font-semibold">
          Solicitar un Rol en la Aplicación
        </h1>
        <p className="mt-5 text-wrap">
          ¡Bienvenido a ReviewMyCode! Si eres un nuevo usuario y deseas acceder
          a la aplicación, necesitarás solicitar un rol apropiado a través del
          proceso de registro. Aunque ya has realizado el registro con Github,
          se te asigna un rol de{" "}
          <Link href="/instrucciones/alumnos" className="text-[#77adff]">
            estudiante 
          </Link>
          {" "}por defecto . A continuación, te explicamos cómo solicitar un rol de{" "}
          <Link href="/instrucciones/profesores" className="text-[#77adff]">
            profesor
          </Link>{" "}
          en la aplicación:
        </p>
        <br />
        <h2 className="text-[25px] font-semibold">
          Paso 1: Contacta con el Administrador del Centro
        </h2>
        <p className="mt-2">
          Para solicitar un rol de{" "}
          <Link href="/instrucciones/profesores" className="text-[#77adff]">
            profesor
          </Link>{" "}
          en ReviewMyCode, primero debes ponerte en contacto con el
          administrador del centro educativo al que estás afiliado. El
          administrador es responsable de gestionar los roles de sus profesores
          en la aplicación y puede ayudarte a obtener acceso según tus
          necesidades específicas.
        </p>
        <br />
        <h2 className="text-[25px] font-semibold">
          Paso 2: Proporciona la Información Necesaria
        </h2>
        <div className="mt-2">
          Al comunicarte con el administrador del centro, asegúrate de
          proporcionar la siguiente información: 
          <ul className="list-disc ml-10 mt-3">
            <li>Tu nombre completo</li>
            <li>Tu dirección de correo electrónico corporativo</li>
            <li>Cualquier información adicional relevante que pueda ayudar al
          administrador a procesar tu solicitud de manera más eficiente.</li>
          </ul>
        </div>
        <br />
        <h2 className="text-[25px] font-semibold">
          Paso 3: ¡Entra en ReviewMyCode!
        </h2>
        <p className="mt-2">
          Una vez que te confirmen que has sido registrado como profesor u otro rol,
          deberás acceder al "Entrar" que esta justo a la izquierda de tu avatar de usuario.
          Dentro, podrás realizar las acciones permitidas para tu rol.
          Puedes leer mas sobre los roles aquí: <Link href="/instrucciones/alumnos" className="text-[#77adff]">
            ALUMNOS
          </Link> / <Link href="/instrucciones/profesores" className="text-[#77adff]">
            PROFESORES
          </Link>
        </p>
      </article>
    </div>
  );
}
