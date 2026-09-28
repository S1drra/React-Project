import { useState } from "react";
import products from "../data/Products";

const heroShoe = products.find((p) => p.bestSeller) ?? products[0];
const lowestPrice = Math.min(...products.map((p) => p.price));

function BusinessProfile() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      id="bus_prof"
      className="relative overflow-hidden bg-slate-200 pb-20 pt-32 text-gray-900 md:pb-28 md:pt-40"
    >
      {/* Oversized wordmark sitting behind the shoe */}
      <span
        aria-hidden="true"
        className="display pointer-events-none absolute -bottom-[0.18em] right-[-4%] select-none text-[46vw] leading-none text-slate-300 md:text-[34vw]"
      >
        MOV
      </span>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.05fr_1fr]">
        <div>
          <h1 className="display text-6xl sm:text-7xl lg:text-8xl">
            Move your way.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-700">
            MOV is a footwear brand built for people who don't stop moving.
            From daily runs to weekend trails, we design shoes that keep pace
            with your life: comfortable, durable, and always in motion.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#products"
              className="rounded-full bg-gray-900 px-8 py-3.5 text-base font-bold text-white transition hover:bg-cyan-600"
            >
              Shop shoes
            </a>
            <p className="text-sm text-gray-600">
              Running, court and trail pairs from ₱
              {lowestPrice.toLocaleString("en-PH")}
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          {/* Speed streaks trailing the shoe */}
          <div
            aria-hidden="true"
            className="absolute -left-6 top-[28%] z-0 hidden space-y-3 sm:block"
          >
            <div className="streak h-1.5 w-24 rounded-full bg-cyan-500" />
            <div className="streak ml-6 h-1.5 w-16 rounded-full bg-gray-900/60" />
            <div className="streak ml-2 h-1.5 w-20 rounded-full bg-gray-900/25" />
          </div>

          <div className="relative aspect-square overflow-hidden rounded-full bg-white ring-8 ring-white">
            {!imgFailed && (
              <img
                src={heroShoe.image}
                alt={heroShoe.name}
                onError={() => setImgFailed(true)}
                className="run-in h-full w-full object-cover"
                style={{ transform: "rotate(-12deg) scale(1.25)" }}
              />
            )}
          </div>
          <p className="mt-5 text-right text-sm font-semibold text-gray-700">
            {heroShoe.name}, ₱{heroShoe.price.toLocaleString("en-PH")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default BusinessProfile;
