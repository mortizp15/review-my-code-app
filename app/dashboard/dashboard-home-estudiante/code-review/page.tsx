import { getComentariosDeEnvio } from "@/app/lib/actions"
import { IoWarningOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { PiChalkboardTeacher } from "react-icons/pi";

export default async function CorreccionesPage() {

    const comentarios = await getComentariosDeEnvio()

    return (
        <section className="w-[90%] h-full text-white">
            <div className="w-[50%] h-full mx-auto">
                {
                    comentarios?.length !== 0 ? (
                        <>
                        <h1 className="flex mt-14 items-center font-semibold text-[20px]"><IoWarningOutline style={{ marginRight: "10px", fontSize: "25px", color: "rgb(37 99 235)" }}/> ¡Tienes nuevas revisiones!</h1>
                            {
                                comentarios?.map((comentario) => (
                                    
                                        <div key={comentario.id_envio_tarea} className="border-[1px] border-[#5f5f5f81] transition hover:bg-[#234] h-fit w-full p-5 rounded-md mt-5 flex items-center">
                                            <div className="rounded-full flex items-center justify-center p-3 bg-blue-600">
                                                <PiChalkboardTeacher style={{
                                                    fontSize: "20px",
                                                }} />
                                            </div>
                                            <div className="ml-5">
                                                <h1 className="font-semibold text-[15px]">Descripción: {comentario.texto_comentario}</h1>
                                                <p className="text-[#507ddf]">Línea: { comentario.linea_codigo_comentada }</p>
                                                <p className="text-[#d8e5ff] font-semibold">Archivo: { comentario.archivo }</p>
                                            </div>
                                        </div>
                                    
                                ))
                            }
                        </>                        
                    ) : (
                        <h1 className="flex mt-14 items-center font-semibold text-[20px]"><AiOutlineLike style={{ marginRight: "10px", fontSize: "25px", color: "rgb(37 99 235)" }}/> No tienes revisiones por ahora</h1>
                    )
                }
            </div>
        </section>
    )
}