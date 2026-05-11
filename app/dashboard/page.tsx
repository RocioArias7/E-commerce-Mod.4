"use client";
import { useAuth } from "@/context/AuthContext";
import { getAllOrders } from "@/services/orders.services"; 
import { User, Package, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


interface Order {
  id: number;
  status: string;
  products?: { id: number; name: string }[];
}

function DashboardPage() {
  const { dataUser, logout } = useAuth();
  const router = useRouter();


  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const fetchOrders = async () => {
      if (!dataUser?.token) return;
      try {
        const data = await getAllOrders(dataUser.token);
        setOrders(data);
      } catch (error) {
        console.error("Error al obtener pedidos", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [dataUser]);

  return (
    <div className="bg-[#fff1f5] min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#3a2d2f]">Mi cuenta</h1>
          <p className="text-gray-500">Gestiona tu perfil, pedidos y preferencias.</p>
        </div>
      

      
        <button
          onClick={() => {
            logout(); 
            router.push("/home");
          }}
          className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition"
        >
          <LogOut size={18} /> 
          Cerrar sesión
        </button>
      </div>
   
      

      <Link href="/home" className="rounded-xl text-lg bg-pink-500 text-white py-2 px-4 hover:bg-pink-600 transition">
        Ir a comprar
      </Link>

      <div className="grid md:grid-cols-3 gap-6 mt-6">

        <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
          <div className="flex items-center gap-2 mb-3 text-pink-500">
            <User size={20} />
            <h2 className="text-2xl font-semibold">Datos personales</h2>
          </div>
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-[#3a2d2f]">Nombre:</span> {dataUser?.user.name}
          </p>
          <p className="text-lg text-gray-600 mt-1">
            <span className="font-semibold text-[#3a2d2f]">Email:</span> {dataUser?.user.email}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-[#3a2d2f]">Teléfono:</span> {dataUser?.user.phone}
          </p>
          <p className="text-lg text-gray-600 mt-1">
            <span className="font-semibold text-[#3a2d2f]">Dirección:</span> {dataUser?.user.address}
          </p>
        </div>

        
        <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
          <div className="flex items-center gap-2 mb-3 text-pink-500">
            <Package size={20} />
            <h2 className="text-2xl font-semibold">Mis pedidos</h2>
          </div>

         
          {orders.length === 0 ? (
            <p className="text-gray-400 text-sm">No tenés pedidos todavía.</p>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="flex justify-between text-lg text-gray-600 mt-2">
                <span>Orden #{order.id}</span>
                <span className="text-green-500 font-medium">{order.status}</span>
              </div>
            ))
          )}
        </div>

       
        <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
          <div className="flex items-center gap-2 mb-3 text-pink-500">
            <Settings size={20} />
            <h2 className="text-2xl font-semibold">Preferencias</h2>
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-lg text-gray-600">Notificaciones al email</span>
            <div className="w-10 h-5 bg-[#ec4899] rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-lg text-gray-600">Ofertas especiales</span>
            <div className="w-10 h-5 bg-gray-300 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardPage;