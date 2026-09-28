import { useState } from "react";

function ProductCard({ name, price, category, image, bestSeller, onClick }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100">
        {bestSeller && (
          <span className="absolute left-2 top-2 z-10 rounded-full bg-cyan-500 px-2 py-1 text-xs font-semibold text-white shadow">
            Best Seller
          </span>
        )}
        {image && !imgFailed ? (
          <img
            src={image}
            alt={name}
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center text-slate-400">
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

      <div className="pt-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-cyan-600">
          {category}
        </span>
        <h3 className="mt-1 text-base font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-lg font-bold text-gray-900">₱{price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;