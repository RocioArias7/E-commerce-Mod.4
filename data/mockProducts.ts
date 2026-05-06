import { IProduct } from "@/interfaces/product.interface";

export const mockProducts: IProduct[] = [
{   
    
    id: 1,
    name: "Gel Limpiador",
    price: 350,
    description:
      "Limpia suavemente la piel eliminando impurezas y exceso de grasa sin resecar. Deja el rostro fresco, equilibrado y listo para tu rutina diaria.",
    image:
      "https://i.imgur.com/z43rTR0.jpg",
    categoryId: 1,
    stock: 10,
  },
  {
    id: 2,
    name: "Serum Vitamina C",
    price: 300,
    description:
      "Ilumina y revitaliza la piel gracias a su fórmula con vitamina C. Ayuda a unificar el tono y aportar un aspecto más radiante y saludable.",
    image:
      "https://i.imgur.com/7iEWOET.jpg",
    categoryId: 2,
    stock: 10,
  },
  {
    id: 3,
    name: "Crema Hidratante",
    price: 400,
    description:
      "Hidrata en profundidad y mantiene la piel suave durante todo el día. Su textura ligera se absorbe rápido sin dejar sensación pesada.",
      image:
      "https://i.imgur.com/SKBc2hU.jpg",
    categoryId: 3,
    stock: 10,
  },
  {
    id: 4,
    name: "Exfoliante Facial",
    price: 399,
    description:
      "Elimina células muertas y mejora la textura de la piel, dejándola más lisa y luminosa. Ideal para renovar el rostro y potenciar tu rutina.",
    image:
      "https://i.imgur.com/ttwgSAE.jpg",
    categoryId: 4,
    stock: 10,
  },
  {
    id: 5,
    name: "Proteccion Solar SPF 50",
    price: 249,
    description:
      "Protege la piel de los rayos UV y previene el envejecimiento prematuro. Fórmula liviana, perfecta para uso diario sin dejar efecto graso.",
    image:
      "https://i.imgur.com/OCHRFX0.jpg",
    categoryId: 5,
    stock: 10,
  },
  {
    id: 6,
    name: "Parches para Ojeras",
    price: 99,
    description:
      "Ayudan a reducir la apariencia de ojeras y signos de fatiga. Dejan la mirada más descansada, fresca y luminosa en minutos.",
    image:
      "https://i.imgur.com/bXRNwsD.jpg",
    categoryId: 6,
    stock: 10,
  },
];

