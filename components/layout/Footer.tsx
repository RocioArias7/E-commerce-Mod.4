"use client"
import Link from "next/link"

function Footer() {
  return (
 <footer className="bg-[#3a2d2f] text-white mt-10">
  <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-16">

    
    <div>
      <h2 className="text-xl font-semibold text-accent mb-2">
        
        ✦ Aura Skincare
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        Tu tienda de confianza para productos de belleza y cuidado personal.
      </p>
    </div>

  
    <div>
      <h3 className="font-semibold text-lg mb-3 text-accent">
        Navegación
      </h3>
      <ul className="space-y-2 text-lg text-gray-300">
        <li> <Link href="/home" className="hover:text-background cursor-pointer">Inicio</Link></li>
        <li> <Link href="/#products" className="hover:text-background cursor-pointer">Productos</Link></li>
        <li> <Link href="/cart" className="hover:text-background cursor-pointer">Carrito</Link></li>
      </ul>
    </div>

    
    <div>
      <h3 className="font-semibold text-lg mb-3 text-accent">
        Cuenta
      </h3>
      <ul className="space-y-2 text-lg text-gray-300">
        <li> <Link href="/login" className="hover:text-background cursor-pointer">Iniciar sesión</Link></li>
        <li> <Link href="/register" className="hover:text-background cursor-pointer">Registrarse</Link></li>
        <li> <Link href="/dashboard" className="hover:text-background cursor-pointer">Mi cuenta</Link></li>
      </ul>
    </div>

    
    <div>
      <h3 className="font-semibold text-lg mb-3 text-accent">
        Contacto
      </h3>
      <ul className="space-y-2 text-lg text-gray-300">
        <li>soporte@aura.com</li>
        <li>+54 9 11 1234 5678</li>
        <li>Santa Fe, Argentina</li>
      </ul>
    </div>

  </div>

  
  <div className="border-t border-gray-600 text-center py-4 text-sm text-gray-400">
    © 2026  ✦ Aura Skincare. Todos los derechos reservados.
  </div>
</footer>
  )
}

export default Footer
