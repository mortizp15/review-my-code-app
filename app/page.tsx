
import { IoIosArrowRoundForward } from "react-icons/io";
import Header from "./ui/header";
import 'animate.css';
import QueOfrecemos from "./ui/home/que-ofrecemos";
import Link from "next/link";

export default async function Home() {
  
  return (    
    <>
      <Header />
      <section className="mt-32 w-full flex flex-col items-center">
        <h1
          style={{ border: "1px solid gray" }}
          className="text-white font-light text-sm bg-[#c8c8c821] px-8 py-1 rounded-full animate__animated animate__fadeIn"
        >
          ReviewMyCode 2024
        </h1>
        <h2
          className="text-white text-[80px] w-1/2 text-center font-medium mt-10 leading-tight animate__animated animate__fadeIn"
        >
          Plataforma de Code Review para profesores
        </h2>
        <h3
          className="mt-14 text-[#a0a0a0] w-1/3 text-xl text-center animate__animated animate__fadeIn"
        >
          Ayuda a tus alumnos a construir código más limpio, seguro y de
          calidad. Aseguraté de que cumplan los plazos necesarios con nuestro
          sistema de tareas.
        </h3>
        <Link
          href="/instrucciones"
          className="iniciarSesion mt-16 font-medium transition flex items-center rounded-full text-white py-2 px-6 bg-[linear-gradient(#6C3BF5,#3F8CFF)] animate__delay-1s animate__animated animate__fadeIn"
        >
          ¿Cómo empiezo?{" "}
          <IoIosArrowRoundForward
            style={{ fontSize: "25px", marginLeft: "10px" }}
          />
        </Link>
      </section>
      <QueOfrecemos />
    </>
  );
}
