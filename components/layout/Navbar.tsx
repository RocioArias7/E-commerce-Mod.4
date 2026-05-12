"use client"
import Link from "next/link";
import { navLinks } from "@/helpers/navLinks.helper";
import { useAuth } from "@/context/AuthContext";
import { useSyncExternalStore } from "react";

function Navbar() {
  const {dataUser} = useAuth ();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );


   return (
    <header className="w-full border-b border-border bg-background">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        <Link href="/" className="flex items-center gap-2">
         
        <div className="text-xl font-semibold text-red-500">
          ✦ AURA Skincare
        </div>
         </Link>

        <nav>
          <ul className="flex gap-8 text-lg text-foreground">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="hover:text-primary transition">
                {link.label}
              </Link>
            ))}
          </ul>
        </nav>


          <div className="flex items-center gap-3">
          {mounted && dataUser ? (
            <p suppressHydrationWarning>{dataUser.user.name}</p>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white">
                Ingresar
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark">
                Registrarse
              </Link>
            </div>
          )}
        </div>

      </div>
    </header>
  )
}

export default Navbar;
      

     