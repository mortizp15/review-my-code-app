import { PiChalkboardTeacherLight } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

const BASE_URL = "/dashboard/dashboard-home-estudiante"

export const opcionesEsrtudiante =  [
        { nombre: "Inicio", href: `${BASE_URL}`, icono: IoHomeOutline },
        { nombre: "Cursos", href: `${BASE_URL}/cursos`, icono: PiChalkboardTeacherLight },
        { nombre: "Tareas", href: `${BASE_URL}/tareas`, icono: PiStudent },
        { nombre: "Correcciones", href: `${BASE_URL}/correcciones`, icono: IoMdCheckmarkCircleOutline },
]