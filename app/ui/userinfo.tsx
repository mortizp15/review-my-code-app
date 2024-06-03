"use client";

import { Session } from "@supabase/supabase-js";
import Image from "next/image";
import { useState } from "react";

interface UserInfoProps {
  handleSignOut: () => Promise<void>; // Tipo para el manejador de cerrar sesión
  session: Session | null; // Tipo para el estado de sesión
}

export default function UserInfo({ handleSignOut, session }: UserInfoProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="relative">
        <Image
          width={200}
          height={200}
          src={session?.user?.user_metadata?.avatar_url || ""}
          data-dropdown-toggle="dropdownDivider"
          alt="Avatar usuario"
          className="w-[4.2rem] h-10 rounded-full cursor-pointer"
          id="dropdownDividerButton"
          onClick={toggleDropdown}
        />
        {isOpen && (
          <div className="absolute z-10 bg-gray-700 divide-y -translate-x-32 divide-gray-100 rounded-md shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <span className="block px-4 py-2 text-sm text-center text-white hover:bg-gray-600 dark:hover:bg-gray-600">
                  {session?.user?.user_metadata?.user_name}
                </span>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="block px-4 py-2 text-sm w-full text-white hover:bg-gray-600 dark:hover:bg-gray-600"
                >
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
