import AddToCartButton from "@/components/AddToCartButton";
import { IProduct } from "@/interfaces/product.interface";
import { getProductById } from "@/services/products.services";
import { notFound } from "next/navigation";

interface ProductPageByIdProps  {
    params: {
        id: string;
    };
}

async function ProductPageById ({ params }: ProductPageByIdProps) {
    const { id } = await params;
 

    let product: IProduct; 
    try {
        product = await getProductById(id);
    } catch (error) {
      console.error(error);
        notFound();
    }


    return (
        <main className="min-h-screen bg-background px-6 py-10">
      <section className="max-w-5xl mx-auto">
      
        <h1 className="text-3xl font-semibold text-foreground mb-2">
          Detalle del producto
        </h1>
        <p className="text-sm text-foreground/70 mb-8">
          Conocé todos los beneficios para tu piel ✨
        </p>

        <div className="grid md:grid-cols-2 gap-10 bg-surface border border-border rounded-2xl shadow-sm p-6">

        
         <div className="w-full rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>


          <div className="flex flex-col justify-between space-y-5">

            <div>
              <h2 className="text-2xl font-semibold text-foreground">
               {product.name}
              </h2>

              <p className="text-foreground/70 mt-3 leading-relaxed">
              {product.description}
              </p>
            </div>

           
            <div className="space-y-2">
              <p className="text-lg">
                <span className="font-medium">Precio: {product.price}</span> 
              </p>

              <p className="text-sm text-foreground/70">
                <span className="font-medium">Stock: 
                  {product.stock > 10
                  ? `${product.stock} disponibles`
                  : product.stock > 0
                    ? `¡Últimas ${product.stock} unidades!`
                    : 'Sin stock'}
                
                </span>
              </p>
            </div>
            <div className="flex items-center justify-start">
              <AddToCartButton product={product} />

            </div>

          </div>
        </div>

      
        <div className="mt-10 bg-surface border border-border rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Detalles
          </h3>

          <p className="text-foreground/70 leading-relaxed">
           Todos nuestros productos están formulados con ingredientes de alta calidad, 
  libres de parabenos y crueldad animal. Recomendamos realizar una prueba en 
  una pequeña área de la piel antes de usar por primera vez. Para mejores 
  resultados, combiná con otros productos de nuestra línea <span className="text-primary font-medium"> ✦ Aura Skincare</span>.
          </p>
        </div>

      </section>
    </main>
  );
}




export default ProductPageById
