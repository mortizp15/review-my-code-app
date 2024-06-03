'use client'

import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import UserInfo from "./userinfo"
import { useRouter } from "next/navigation"

export default function BotonAuth({ session } : { session: Session | null }) {
    const supabase = createClientComponentClient()
    const router = useRouter()

    const handleSignIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: "http://localhost:3000/auth/callback"
            }
        })
    }

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    return (
        <div className="text-white">
            {
                session === null ? (
                    <button onClick={handleSignIn} className="iniciarSesion mr-4 font-medium w-36 py-2 rounded-full transition bg-[linear-gradient(#6C3BF5,#3F8CFF)]">
                        Iniciar Sesión
                    </button>
                ) : (
                    <UserInfo handleSignOut={handleSignOut} session={session}/>
                )
            }
        </div>
    )
}