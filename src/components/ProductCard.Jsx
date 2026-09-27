import { useState } from "react";

function ProductCard({ name, price, category, description, image }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition hover:shadow-lg">
      <div className="aspect-square w-full bg-slate-100 flex items-center justify-center">
        {image && !imgFailed ? (
          <img
            src={image}
            alt={name}
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center text-slate-400">
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l3.409 3.409M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
            <span className="mt-2 text-xs">Photo coming soon</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-cyan-600">
          {category}
        </span>
        <h3 className="mt-2 text-lg font-bold text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <p className="mt-3 text-xl font-bold text-gray-900">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;