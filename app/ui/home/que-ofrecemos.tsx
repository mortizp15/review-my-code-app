import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoGitNetworkOutline } from "react-icons/io5";

export default function QueOfrecemos() {
    return (
        <section id="servicios" className="text-white w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-[40px] font-semibold ">¿Qué Ofrecemos?</h1>
            <div className="mt-20 w-[60%] flex flex-wrap justify-center gap-7 ">
                <div className="w-[320px] rounded-md p-5 h-96 flex flex-col items-center">
                    <FaGithub style={{
                        color: '#77adff',
                        fontSize: '70px'
                    }} />
                    <h3 className="mt-6 font-semibold text-xl">Integración GitHub</h3>
                    <p className="text-center mt-5 text-[#dddddd]">
                        Tus alumnos podrán subir su código directamente desde respositorios de GitHub.
                    </p>
                </div>
                <div className="w-[320px] rounded-md p-5 h-96 flex flex-col items-center">
                    <FaCode style={{
                        color: '#77adff',
                        fontSize: '70px'
                    }} />
                    <h3 className="mt-6 font-semibold text-xl">Editor de Código</h3>
                    <p className="text-center mt-5 text-[#dddddd]">
                        Comenta, corrige, añade o elimina líneas de código sin tener que abrir ningun IDE.
                    </p>
                </div>
                <div className="w-[320px] rounded-md p-5 h-96 flex flex-col items-center">
                    <IoGitNetworkOutline  style={{
                        color: '#77adff',
                        fontSize: '70px'
                    }} />
                    <h3 className="mt-6 font-semibold text-xl">Gestión de Tareas</h3>
                    <p className="text-center mt-5 text-[#dddddd]">
                        Crea tareas con fecha límite donde tus alumnos subirán su código y podrás administrar las entregas.
                    </p>
                </div>
            </div>
            <Link
            href="/instrucciones"
            className="iniciarSesion mt-3 transition flex items-center rounded-full text-white py-2 px-6 bg-[linear-gradient(#6C3BF5,#3F8CFF)]"
            >
            Solicitar Rol
            <IoIosArrowRoundForward
                style={{ fontSize: "25px", marginLeft: "10px" }}
            />
            </Link>
        </section>
    )
}