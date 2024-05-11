'use client'

import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { PiChalkboardTeacherLight, PiStudent } from "react-icons/pi";

export default function UpdateRol({ session } : { session: Session | null }) {
    
    const supabase = createClientComponentClient()
    const router = useRouter()

    const handleClick = async (nombreUsuario: string, nuevoRol: string) => {
        try {
            const { data } = await supabase
                .from('usuario')
                .update({ rol: nuevoRol })
                .eq('username', nombreUsuario)
                .select()

            router.refresh()
            
        } catch(error) {
            console.log(error)
        }
    }


    return (
        <section className="flex items-center justify-center w-full h-full">
            <div className="w-[50%] h-[70%] rounded-md flex flex-col flex-wrap gap-2 items-center justify-center">
                    <h1 className="text-white text-[45px] font-bold">¿Qué rol quieres representar?</h1>
                    <p className="text-[#8d8d8d] text-center mt-4 w-[60%] text-[15px] font-medium">El rol que escojas ahora no puede ser modificado por tu cuenta, para cambiar de rol, deberás contactar con tu director.</p>
                    <div className="flex gap-4 w-full h-96 justify-center items-center">
                        <div onClick={() => handleClick(session?.user.user_metadata.user_name, "estudiante")} className="cursor-pointer rounded-[10px] flex flex-col justify-center transition hover:bg-[#ffffff0a] text-center items-center w-[30%] h-[60%]">
                            <PiStudent style={{
                                fontSize: "50px",
                                color: "white",
                                marginBottom: "15px"
                            }}/>
                            <h1 className="text-[#77adff] font-bold text-[25px]">Rol de Estudiante</h1>
                            <h2 className="text-white font-semibold mt-3">Pincha encima</h2>
                        </div>
                        <div onClick={() => handleClick(session?.user.user_metadata.user_name, "profesor")} className="cursor-pointer rounded-[10px] flex flex-col justify-center transition hover:bg-[#ffffff0a] text-center items-center w-[30%] h-[60%]">
                            <PiChalkboardTeacherLight style={{
                                fontSize: "50px",
                                color: "white",
                                marginBottom: "15px"
                            }}/>
                            <h1 className="text-[#77adff] font-bold text-[25px]">Rol de Profesor</h1>
                            <h2 className="text-white font-semibold mt-3">Pincha encima</h2>
                        </div>
                    </div>
            </div>
        </section>
    )
}