import Card from "./Card";
import { getAllProducts } from "@/services/products.services";


async function CardContainer() {
  const allProducts = await getAllProducts();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
      {allProducts?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </section>
  );
}

export default CardContainer;

{/* <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6"></section> */}