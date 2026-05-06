"use client";
import { useCart } from "@/context/CartContext";
import { IProduct } from "@/interfaces/product.interface";

interface AddToCartButtonProps {
  product: IProduct;
}

function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
  onClick={() => addToCart(product)}
  className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-xl text-sm font-medium transition-all duration-300"
>
  Agregar al carrito
</button>
 
  );
}

export default AddToCartButton;