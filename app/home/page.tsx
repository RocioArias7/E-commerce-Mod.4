import CardContainer from "@/components/CardContainer";
import Link from "next/dist/client/link";

function HomePage () {
  return (
    <main className="bg-background">

      
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
       
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-accent/10 pointer-events-none" />
        <div className="absolute -top-32 -right-32  width: 500px height: 500px rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20  width: 350px height: 350px rounded-full bg-accent/10 blur-2xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
         
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              ✦ Skincare de autor
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Tu piel,
              <span className="text-primary italic font-light">merece</span>
              <br /> lo mejor.
            </h1>

            <p className="mt-6 text-foreground/60 text-lg max-w-md leading-relaxed">
              Descubrí nuestra línea de productos pensados para nutrir, proteger y realzar tu piel de forma natural.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#productos"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Ver productos
              </Link>
              <Link
                href="/register"
                className="border border-border text-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-surface transition-all duration-300"
              >
                Crear cuenta
              </Link>
            </div>
          </div>

          
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/30 to-accent/20 blur-xl" />
              <div className="relative w-full h-full rounded-full border border-primary/20 flex items-center justify-center text-8xl">
                🌸
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-foreground mb-12">
            ¿Por qué elegir <span className="text-primary">AURA</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚚",
                title: "Envío gratis",
                desc: "En todas tus compras, sin mínimo. Rápido y seguro a todo el país.",
              },
              {
                icon: "🌿",
                title: "Ingredientes naturales",
                desc: "Formulados con lo mejor de la naturaleza, sin químicos agresivos para tu piel.",
              },
              {
                icon: "✨",
                title: "Resultados visibles",
                desc: "Productos desarrollados por especialistas para que tu piel brille desde el primer uso.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface border border-border rounded-2xl p-8 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section id="productos" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Nuestros <span className="text-primary">productos</span>
            </h2>
            <p className="mt-3 text-foreground/60 text-sm">
              Elegidos para vos, formulados con amor.
            </p>
          </div>
          <CardContainer />
        </div>
      </section>
      


<section className="relative overflow-hidden py-20 px-6 text-center  bg-accent/30">
  
  <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-primary/8 pointer-events-none" />
  <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-accent/15 pointer-events-none" />

  <div className="relative max-w-xl mx-auto">
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 rounded-full px-4 py-1.5 mb-5">
      ✦ Únete a AURA
    </span>

    <h2 className="text-4xl font-bold text-foreground mb-4 leading-tight">
      ¿Lista para <span className="text-primary italic font-light">brillar</span>?
    </h2>

    <p className="text-foreground/60 text-base leading-relaxed mb-8">
      Creá tu cuenta hoy y recibí un 10% de descuento en tu primera compra.
      Accedé a ofertas exclusivas y productos pensados para vos.
    </p>

    <div className="flex flex-wrap gap-3 justify-center mb-5">
      <Link
        href="/register"
        className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
      >
        Crear cuenta gratis
      </Link>
      <Link
        href="#productos"
        className="bg-surface border border-border text-primary px-8 py-3.5 rounded-full font-semibold text-sm hover:shadow-sm transition-all duration-300"
      >
        Ver productos
      </Link>
    </div>

    <p className="text-xs text-foreground/40">
      Sin cargo de membresía · Cancelá cuando quieras · Envíos gratis 🌸
    </p>
  </div>
</section>

    </main>
  );
}

export default HomePage;