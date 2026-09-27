import { useState, useEffect } from "react";
import products from "../data/Products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

// Matches the responsive widths below: 1 item on mobile, 2 on sm, 3 on lg
function getItemsPerView() {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 1024) return 3; // lg
  if (window.innerWidth >= 640) return 2; // sm
  return 1;
}

function Products() {
  const [index, setIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView);

  // Keep itemsPerView in sync with the viewport, and re-clamp index so
  // we never scroll past the last full "page" of items.
  useEffect(() => {
    function handleResize() {
      setItemsPerView(getItemsPerView());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const pageCount = maxIndex + 1;
  const stepPercent = 100 / itemsPerView;

  function showPrev() {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }

  function showNext() {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  }

  return (
    <section id="products" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">Our Shoes</h2>

        <div className="relative mt-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * stepPercent}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 px-2 sm:w-1/2 lg:w-1/3">
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    image={product.image}
                    onClick={() => setSelectedProduct(product)}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={showPrev}
            aria-label="Previous product"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-gray-900 p-2 text-white shadow-md hover:bg-gray-700"
          >
            ‹
          </button>
          <button
            onClick={showNext}
            aria-label="Next product"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-gray-900 p-2 text-white shadow-md hover:bg-gray-700"
          >
            ›
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-cyan-500" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}

export default Products;