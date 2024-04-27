import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import UpdateRol from "../ui/dashboard/update-rol";
import Header from "../ui/header";

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/");
  }

  let { data: rol } = await supabase
    .from("usuario")
    .select("rol")
    .eq("username", session.user.user_metadata.user_name);

  let rolObjetivo: string = "";

  rol?.map((rolBuscado) => {
    const { rol: rolResultado } = rolBuscado;

    rolObjetivo = rolResultado;
  });


  if (rolObjetivo === "estudiante") {
    redirect("/dashboard/dashboard-home-estudiante");
  } else if (rolObjetivo === "profesor") {
    redirect("/dashboard/dashboard-home-profesor");
  }

  return (
    <>
        <Header />
        <UpdateRol session={session} />
    </>
  )
}
