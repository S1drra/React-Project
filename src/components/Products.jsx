import { useState, useEffect } from "react";
import products from "../data/Products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

// Matches the responsive widths below: 2 items on mobile, 2 on sm, 3 on lg
function getItemsPerView() {
  if (typeof window === "undefined") return 2;
  if (window.innerWidth >= 1024) return 3; // lg
  if (window.innerWidth >= 640) return 2; // sm
  return 2; // mobile
}

const categories = ["All", ...new Set(products.map((p) => p.category))];
const bestSellers = products.filter((p) => p.bestSeller);

function Products() {
  const [index, setIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Keep itemsPerView in sync with the viewport, and re-clamp index so
  // we never scroll past the last full "page" of items.
  useEffect(() => {
    function handleResize() {
      setItemsPerView(getItemsPerView());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredProducts.length - itemsPerView);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Jump back to the first slide whenever the category changes so the
  // carousel doesn't stay stuck on an index that no longer makes sense.
  function handleCategoryChange(category) {
    setSelectedCategory(category);
    setIndex(0);
  }

  const pageCount = maxIndex + 1;
  const stepPercent = 100 / itemsPerView;

  function showPrev() {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }

  function showNext() {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  }

  return (
    <section id="products" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="display text-5xl md:text-6xl">Our shoes</h2>
        <p className="mt-4 max-w-md text-lg text-gray-900/70">
          Pick a pair for school, work, sports or the weekend. Tap any shoe
          for details.
        </p>

        {bestSellers.length > 0 && (
          <div className="mt-14">
            <h3 className="display text-2xl md:text-3xl">Best sellers</h3>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {bestSellers.slice(0, 3).map((product, i) => (
                <div
                  key={product.id}
                  className={i === 0 ? "col-span-2 md:col-span-1 md:row-span-1" : ""}
                >
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    image={product.image}
                    bestSeller={product.bestSeller}
                    featured={i === 0}
                    onClick={() => setSelectedProduct(product)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <h3 className="display mt-20 text-2xl md:text-3xl">All shoes</h3>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              aria-pressed={category === selectedCategory}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                category === selectedCategory
                  ? "bg-gray-900 text-white"
                  : "bg-slate-100 text-gray-900 hover:bg-cyan-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative mt-6">
          <div className="-mx-2 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * stepPercent}%)` }}
            >
              {filteredProducts.map((product) => (
                <div key={product.id} className="w-1/2 flex-shrink-0 px-2 lg:w-1/3">
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    image={product.image}
                    bestSeller={product.bestSeller}
                    onClick={() => setSelectedProduct(product)}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={showPrev}
            aria-label="Previous product"
            className="absolute left-0 top-[38%] flex h-11 w-11 -translate-x-3 items-center justify-center rounded-full bg-gray-900 text-xl text-white shadow-lg transition hover:bg-cyan-700 md:-translate-x-5"
          >
            ‹
          </button>
          <button
            onClick={showNext}
            aria-label="Next product"
            className="absolute right-0 top-[38%] flex h-11 w-11 translate-x-3 items-center justify-center rounded-full bg-gray-900 text-xl text-white shadow-lg transition hover:bg-cyan-700 md:translate-x-5"
          >
            ›
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-cyan-500" : "w-2.5 bg-gray-900/20"
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