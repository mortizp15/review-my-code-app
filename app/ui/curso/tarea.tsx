import { MdOutlineWorkOutline } from "react-icons/md";

export default function TareasDelCurso({ nombre, profesor, fechaInicio } : { nombre: string, profesor: string, fechaInicio: string}) {

    return (
        <div className="border-[1px] border-[#5f5f5f81] transition cursor-pointer hover:bg-[#234] p-5 rounded-md mt-5 flex items-center">
            <div className="rounded-full flex items-center justify-center p-3 bg-blue-600">
                <MdOutlineWorkOutline style={{
                    fontSize: "20px",
                }} />
            </div>
            <div className="ml-5">
                <h1 className="font-semibold text-[15px]">{profesor} ha publicado una nueva tarea: {nombre}</h1>
                <p className="text-[#a0a0a0]">{fechaInicio}</p>
            </div>
        </div>
    )

}