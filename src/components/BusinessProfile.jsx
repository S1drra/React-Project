function BusinessProfile() {
  return (
    <section id="bus_prof" className="bg-slate-200 py-16 pt-24 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to MOV</h1>
        <p className="mt-2 text-lg font-semibold uppercase tracking-wide text-cyan-600">
          Move Your Way.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          MOV is a footwear brand built for people who don't stop moving.
          From daily runs to weekend trails, we design shoes that keep pace
          with your life — comfortable, durable, and always in motion.
        </p>
        <a
          href="#products"
          className="mt-8 inline-block rounded-full bg-gray-900 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-gray-700"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}

export default BusinessProfile;