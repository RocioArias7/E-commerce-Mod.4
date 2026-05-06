import { IProduct } from "@/interfaces/product.interface";
import AddToCartButton from "./AddToCartButton";
import Link from "next/link"; 

interface CardProps {
  product: IProduct;
}

function Card({ product }: CardProps) {
  return (
    <div className="relative flex flex-col w-full bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      
   

     <Link href={`/product/${product.id}`}>
        <div>
          <img 
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
        </div>
      </Link>
      
      <div className="px-4 pb-4 text-center">
        
        <h3 className="text-lg font-medium text-foreground">
          {product.name}
        </h3>

        <p className="text-xs text-foreground/60 leading-snug line-clamp-2" >
          {product.description}
        </p>
        <p className="mt-2 text-base font-semibold text-primary">
          ${product.price}
        </p>
        <p className="text-xs text-foreground/50">
          Stock: {product.stock} unidades
         
        </p>
      </div> 

            <div className="px-4 pb-4">
        <AddToCartButton product={product} />
      </div>

    </div>
  );
}

export default Card;




   