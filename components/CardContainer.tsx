import { IProduct } from "@/interfaces/product.interface";
import Card from "./Card";
import { getAllProducts } from "@/services/products.services";


async function CardContainer() {
  let allProducts: IProduct[] = [];
  
  try {
    allProducts = await getAllProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
      {allProducts?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </section>
  );
}

export default CardContainer;

