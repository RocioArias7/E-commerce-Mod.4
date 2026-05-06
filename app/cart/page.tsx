"use client";
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { createOrder } from '@/services/orders.services';
import Link from 'next/dist/client/link';


function CartPage() {
  const { cartItems, removeFromCart, getIdItems, getTotal, clearCart } = useCart();
  const { dataUser } = useAuth();


  const handleCheckout = async () => {
    if(!dataUser?.token) {
      return alert('Debes iniciar sesión para finalizar tu compra');
    }
    try {
      await createOrder(getIdItems(), dataUser.token);
      clearCart();
    } catch (error) {
      console.error('Error en completar la compra', error);
    }
  };

  return (
    <section className="max-w-6xl mx-auto mt-12 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Lista de productos */}
        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-4xl font-bold text-foreground">🛒 Carrito de compras</h1>
          <p className="text-sm text-foreground opacity-70">
            Revisa los productos antes de finalizar tu compra.
          </p>

          {cartItems.length === 0 ? (
            <p className="text-center text-muted mt-10">Tu carrito está vacío.</p>
          ) : (
            cartItems.map((item) => (
              <article
                key={item.id}
                className="flex items-center gap-5 bg-surface border border-border rounded-2xl p-5 shadow-sm"
              >
                <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-accent/20">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 text-left">
                  <h2 className="text-lg font-semibold text-foreground">{item.name}</h2>
                  <p className="text-sm text-foreground opacity-70">
                    Cantidad: 1
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary">
                    ${item.price.toLocaleString("es-CO")}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-400 hover:text-red-600 underline transition-colors duration-200"
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Resumen del pedido */}
        <div className="sticky top-24 rounded-2xl border border-border bg-surface p-6 shadow-sm h-fit">
          <h3 className="text-lg font-bold text-foreground">Resumen del pedido</h3>

          <div className="mt-4 space-y-3 border-b border-border pb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm text-muted">
                <span>{item.name}</span> {/* 👈 nombre del producto */}
                <span className='font-medium text-primary'>${item.price.toLocaleString("es-CO")}</span> {/* 👈 precio */}
              </div>
            ))}
          </div>

          <div className="flex justify-between text-sm text-muted mt-4">
            <span>Envío</span>
            <span className="font-medium text-success text-primary">Gratis</span>
          </div>

          <div className="mt-4 flex justify-between">
            <span className="text-lg font-bold text-foreground">Total</span>
            <span className="text-2xl font-bold text-primary">
              ${getTotal().toLocaleString("es-CO")} {/* 👈 suma de todos los precios */}
            </span>
          </div>

          <button onClick={handleCheckout} className="mt-6 w-full cursor-pointer rounded-xl bg-linear-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90">
            Pagar
          </button>

          <Link
            href="/home"
            className="mt-3 block text-center text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            Seguir comprando
          </Link>
        </div>

      </div>
    </section>
  );
}







  
export default CartPage;
