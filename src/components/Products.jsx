import products from "../data/products";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <section id="products" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">Our Shoes</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;