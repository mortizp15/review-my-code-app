import Link from "next/link"

const links = [
    { nombre: "Inicio", href: "/" },
    { nombre: "Qué Ofrecemos", href: "/#servicios" },
    { nombre: "Documentación", href: "/instrucciones" },
    { nombre: "Contacto", href: "/contacto" }
]

export default function NavLinks() {
    return (
        <>
            {links.map(link => (
                <Link
                    key={link.nombre}
                    href={link.href}
                    className="mx-5 cursor-pointer font-medium transition hover:text-[#77adff]"
                >
                    {link.nombre}
                </Link>
            ))}
        </>
    )
}