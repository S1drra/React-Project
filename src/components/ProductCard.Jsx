import { useState } from "react";

function ProductCard({
  name,
  price,
  category,
  image,
  bestSeller,
  onClick,
  featured = false,
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full text-left"
      aria-label={`View ${name}`}
    >
      <div
        className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 ${
          featured ? "ring-4 ring-cyan-500" : ""
        }`}
      >
        {bestSeller && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-cyan-400">
            Best seller
          </span>
        )}
        {image && !imgFailed ? (
          <img
            src={image}
            alt=""
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center text-gray-900/40">
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
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

      <div className="flex items-baseline justify-between gap-3 pt-3">
        <h3 className="wide text-base font-bold leading-snug group-hover:text-cyan-700">
          {name}
        </h3>
        <p className="wide shrink-0 text-base font-extrabold text-cyan-700">
          ₱{price.toLocaleString("en-PH")}
        </p>
      </div>
      <p className="mt-0.5 text-sm text-gray-900/60">{category}</p>
    </button>
  );
}

export default ProductCard;
