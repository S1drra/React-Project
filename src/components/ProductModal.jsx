function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-lg"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-2xl leading-none text-slate-400 hover:text-gray-900"
        >
          &times;
        </button>

        <div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <span className="mt-4 block text-xs font-semibold uppercase tracking-wide text-cyan-600">
          {product.category}
        </span>
        <h3 className="mt-1 text-2xl font-bold text-gray-900">{product.name}</h3>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="mt-4 text-2xl font-bold text-gray-900">
          ₱{product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default ProductModal;
