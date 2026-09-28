import { useEffect } from "react";

function ProductModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/70 p-4"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        onClick={(e) => e.stopPropagation()}
        className="pop relative grid max-h-[92vh] w-full max-w-3xl overflow-auto rounded-3xl bg-white md:grid-cols-2"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl leading-none text-gray-900 shadow hover:bg-cyan-500"
        >
          &times;
        </button>

        <div className="aspect-square bg-slate-100 md:aspect-auto">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-7 md:p-9">
          <p className="text-sm font-semibold text-cyan-700">{product.category}</p>
          <h3 className="display mt-1 text-3xl">{product.name}</h3>
          <p className="mt-4 leading-relaxed text-gray-900/75">
            {product.description}
          </p>
          <p className="wide mt-6 text-3xl font-extrabold">
            ₱{product.price.toLocaleString("en-PH")}
          </p>
          <a
            href="#contact"
            onClick={onClose}
            className="mt-6 inline-block self-start rounded-full bg-cyan-500 px-7 py-3 font-bold text-gray-900 transition hover:bg-cyan-400"
          >
            Ask about this pair
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
