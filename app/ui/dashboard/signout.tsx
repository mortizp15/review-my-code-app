"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { VscSignOut } from "react-icons/vsc";

export default function SignOut() {

    const supabase = createClientComponentClient()
    const router = useRouter()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push("/")
        router.refresh()
    }

    return (
        <button className="p-2 transition rounded-md flex items-center font-semibold text-red-600 hover:text-red-500" onClick={handleSignOut}>
            <VscSignOut style={{
                marginRight: "0.75rem",
                fontSize: '20px'
            }}/>
            Cerrar Sesión
        </button>
    )

}