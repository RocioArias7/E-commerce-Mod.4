import { IProduct } from "@/interfaces/product.interface"
const API_URL = process.env.NEXT_PUBLIC_API_URL 


export const getAllProducts = async () => {
  try {
    const resAllProducts = await fetch(`${API_URL}/products`, {
    method: 'GET',
    });

    const productsResponse: IProduct[] = await resAllProducts.json();
    return productsResponse;
  } catch (error) {
    throw new Error(error as string);
  }
};





export const getProductById = async (id: string) => {
  try {
    const allProducts = await getAllProducts();
    const product = allProducts.find((product) => product.id === Number(id));
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    return product;
  } catch (error) {
    throw new Error(error as string);
  }

}


