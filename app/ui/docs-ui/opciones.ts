import { MdOutlineNotStarted } from "react-icons/md";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";

export const opciones =  [
        { nombre: "Comenzar", href: "/instrucciones", icono: MdOutlineNotStarted },
        { nombre: "Profesores", href: "/instrucciones/profesores", icono: PiChalkboardTeacherLight },
        { nombre: "Estudiantes", href: "/instrucciones/estudiantes", icono: PiStudent },
        { nombre: "Tareas", href: "/instrucciones/tareas", icono: MdOutlineWorkOutline },
        { nombre: "Correcciones", href: "/instrucciones/correcciones", icono: IoMdCheckmarkCircleOutline },
        { nombre: "Panel", href: "/instrucciones/panel", icono: MdOutlineDashboard },
    ]