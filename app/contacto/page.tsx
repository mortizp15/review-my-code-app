import Link from "next/link";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function Contacto() {

    const ICON = "</>";

  return (
    <section className="w-full flex items-center justify-center p-4 h-full">
      <div className="w-[30%] h-full p-3 px-10 flex flex-col justify-between">
        <div>
            <Link href="/" className="mr-5 font-bold text-[20px] text-white">
            {ICON} REVIEWMYCODE
            </Link>
            <div className="mt-14 w-[80%]">
                <div className="flex gap-4">
                <IoChatbubblesOutline style={{
                    color: "white",
                    fontSize: "1.3rem",
                }} /><h2 className="font-semibold text-lg text-white">Mándanos un correo</h2>
                </div>
                <p className="ml-9 mt-1 text-zinc-400 text-[16px] font-medium">24 horas al día / 7 días de la semana</p>
                <p className="ml-9 mt-3 text-white">maortizpelegrin@gmail.com</p>
            </div>
            <div className="mt-10 w-[80%]">
                <div className="flex gap-4">
                <MdOutlinePhoneInTalk style={{
                    color: "white",
                    fontSize: "1.3rem",
                }} /><h2 className="font-semibold text-lg text-white">Llámanos</h2>
                </div>
                <p className="ml-9 mt-1 text-zinc-400 text-[16px] font-medium">Te atenderemos estes donde estés</p>
                <p className="ml-9 mt-3 text-white">+34 329 54 23 43</p>
            </div>
            <div className="mt-10 w-[80%]">
                <div className="flex gap-4">
                <IoLocationOutline style={{
                    color: "white",
                    fontSize: "1.3rem",
                }} /><h2 className="font-semibold text-lg text-white">Ven a vernos</h2>
                </div>
                <p className="ml-9 mt-1 text-zinc-400 text-[16px] font-medium">Haznos una visita y te ayudaremos presencialmente</p>
                <p className="ml-9 mt-3 text-white">P.º de San Eugenio, 21, 45003 Toledo</p>
            </div>
        </div>
        <div className="flex p-2 px-4 bg-[#3333337c] rounded-full gap-5 items-center justify-center w-fit">
            <a href="https://github.com/mortizp15" target="_blank" className="font-bold text-[20px] text-white"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/manuel-ortiz-4ba1442a1/" target="_blank" className="font-bold text-[20px] text-white"><FaLinkedin /></a>
            <a href="https://x.com/mortizp15" target="_blank" className="font-bold text-[20px] text-white"><BsTwitterX /></a>
            <a href="mailto:maortizpelegrin@gmail.com" target="_blank" className="font-bold text-[20px] text-white"><SiGmail /></a>
        </div>
      </div>
      <div className="w-[50%] rounded-[20px] h-full p-14 text-white bg-[#463dc2] ">
        <h1 className="text-[40px] font-semibold">¡Contáctanos! Estamos encantados de leerte. Cualquier idea o sugerencia, ¡dinosla!</h1>
        <p className="mt-3 font-medium">Todos los campos con el simbolo "*" son obligatorios de rellenar.</p>
      
        <form action="" className="flex flex-col mt-20">
            <input type="text" placeholder="Tu nombre" className="text-white bg-transparent border-b-2 placeholder:text-white py-3 border-white focus:outline-none"/>
            <input type="text" placeholder="Correo electrónico" className="text-white bg-transparent mt-5 border-b-2 placeholder:text-white py-3  border-white focus:outline-none"/>
            <textarea placeholder="¡Cuéntanos!" className="text-white bg-transparent border-b-2 mt-7 h-[150px] placeholder:text-white py-3  border-white focus:outline-none"/>
            <button className="mt-7  bg-white text-black font-semibold py-3 px-5 rounded-md">Enviar</button>
        </form>
      </div>
    </section>
  );
}
